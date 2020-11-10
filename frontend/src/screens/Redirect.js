import React, { useEffect } from 'react'
import axios from 'axios'

const Redirect = (props) => {
  const url = props.match.params.url

  useEffect(() => {
    const getUrl = async (url) => {
      const { data } = await axios.get(`/${url}`)
      window.location.replace(`${data.originalUrl}`)
    }

    getUrl(url)
  }, [])

  return (
    <div>
      <h1>Redirect</h1>
    </div>
  )
}

export default Redirect
