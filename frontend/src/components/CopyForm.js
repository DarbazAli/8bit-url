import React from 'react'
import { Link } from 'react-router-dom'
const CopyForm = () => {
  return (
    <div className='copy-form'>
      <div className='back-link'>
        <Link to='/'>Back</Link>
      </div>

      <form>
        <h1>Paste a URL to shorten it</h1>
        <input type='text' placeholder='Paste a link here..'></input>
        <button>Copy URL</button>
        <p className='messge'>Original URL: {'original_url'}</p>
      </form>
    </div>
  )
}

export default CopyForm
