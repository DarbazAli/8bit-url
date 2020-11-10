import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { create } from '../url/api-url'

const PostForm = (props) => {
  const [value, setValue] = useState('')
  const [url, setUrl] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()

    axios
      .post('/api/url', { url: value })
      .then((res) => {
        const { data } = res
        setUrl(data)
        // props.history.push({
        //   pathname: '/done',
        //   state: { detail: url },
        // })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className='main-form'>
      <form onSubmit={handleSubmit}>
        <h1>Paste a URL to shorten it</h1>

        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          name='url'
          type='text'
          id='url'
          placeholder='Paste a link here..'
        ></input>
        <button type='submit'>Shorten URL</button>
      </form>
      <p className='error'></p>
    </div>
  )
}

export default withRouter(PostForm)
