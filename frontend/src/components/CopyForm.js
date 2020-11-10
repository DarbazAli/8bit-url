import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
const CopyForm = (props) => {
  const [url, setUrl] = useState({})
  const [copy, setCopy] = useState('Copy URL')
  const location = useLocation()
  useEffect(() => {
    setUrl(location.state)
  }, [location.state])

  const copyUrl = (e) => {
    e.preventDefault()
    const copyText = `${window.location.host}/${url.shortUrl}`
    navigator.clipboard.writeText(copyText)
    setCopy('Copied')
  }
  return (
    <div className='copy-form'>
      <div className='back-link'>
        <Link to='/'>Back</Link>
      </div>

      <form>
        <h1>8bit-URL is ready</h1>
        <input
          readOnly
          type='text'
          value={`${window.location.host}/${url.shortUrl}`}
        ></input>
        <button onClick={copyUrl}>{copy}</button>
      </form>
    </div>
  )
}

export default CopyForm
