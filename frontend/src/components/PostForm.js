import React from 'react'

const PostForm = () => {
  return (
    <div className='main-form'>
      <form>
        <h1>Paste a URL to shorten it</h1>
        <input
          name='url'
          type='text'
          id='url'
          placeholder='Paste a link here..'
        ></input>
        <button>Shorten URL</button>
      </form>
      <p className='error'></p>
    </div>
  )
}

export default PostForm
