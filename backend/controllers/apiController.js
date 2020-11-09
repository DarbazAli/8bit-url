import { generate } from 'shortid'
import validUrl from 'valid-url'
import URL from '../models/url-model.js'

/*----------------------------------------------------
    CREATE NEW SHORT URL
-----------------------------------------------------*/
const create = async (req, res) => {
  const { url } = req.body

  // check if url is valid
  if (!validUrl.isWebUri(url)) {
    return res.status(400).json({
      error: 'Invalid url',
    })
  }

  // if url is valid, save to database
  else {
    const newUrl = new URL({
      originalUrl: url,
      shortUrl: generate(),
    })

    try {
      await newUrl.save()
      return res.status(200).json(newUrl)
    } catch (err) {
      return res.status(400).json({
        error: err,
      })
    }
  }
}

/*----------------------------------------------------
    GET ALL URLS
-----------------------------------------------------*/
const list = async (req, res) => {
  try {
    let urls = await URL.find().select('originalUrl shortUrl')
    return res.status(200).json(urls)
  } catch (err) {
    return res.json({
      error: err,
    })
  }
}

export default { create, list }
