import React, { useState } from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import axios from 'axios'

const PostForm = (props) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()

    axios
      .post('/api/url', { url: value })
      .then((res) => {
        const { data } = res
        history.push({
          pathname: '/done/copy',
          state: data,
        })
      })
      .catch((err) => {
        setError('Please provide a valid URL')
        setValue('')
      })
  }
  return (
    <div className='main-form'>
      <form onSubmit={handleSubmit}>
        <h1>Paste a URL to shorten</h1>

        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          name='url'
          type='text'
          id='url'
          placeholder='Paste a link here..'
        ></input>
        <button type='submit'>Shorten URL</button>
        <p className='error'>{error}</p>
      </form>
    </div>
  )
}

export default withRouter(PostForm)
