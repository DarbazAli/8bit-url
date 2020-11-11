import React, { useEffect } from 'react'

import axios from 'axios'

const Redirect = (props) => {
  const urlId = props.match.params.url
  useEffect(() => {
    const getUrl = async (url) => {
      const { data } = await axios.get(`/${urlId}`)
      window.location = `${data.originalUrl}`
    }

    getUrl(urlId)
  }, [urlId])

  return <div></div>
}

export default Redirect
