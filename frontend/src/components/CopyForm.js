import React from 'react'

const CopyForm = () => {
  return (
    <div className='copy-form'>
      <form>
        <h1>Paste a URL to shorten it</h1>
        <input type='text' placeholder='Paste a link here..'></input>
        <button>Copy URL</button>
      </form>
      <p className='messge'>Original URL: {'original_url'}</p>
    </div>
  )
}

export default CopyForm
