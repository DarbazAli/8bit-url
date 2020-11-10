import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Urls = () => {
  const [urls, setUrls] = useState([])

  useEffect(() => {
    const fetchUrls = async () => {
      const { data } = await axios.get('/api/url')
      setUrls(data)
    }
    fetchUrls()
  })
  return (
    <div>
      <ul>
        {urls.map((item) => (
          <li key={item._id}>{item.originalUrl}</li>
        ))}
      </ul>
    </div>
  )
}

export default Urls
