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

  // check if url is already exist

  // if url is valid, save to database
  else {
    // check if url is already exist

    const isExist = await URL.findOne({ originalUrl: url })

    // if url is already shortend, response back with the url
    if (isExist) {
      return res.status(200).json(isExist)
    }
    // else save new url to database
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

/*----------------------------------------------------
    REDIRECT TO originalUrl
-----------------------------------------------------*/
const redirectTo = async (req, res) => {
  const { url } = req.params
  try {
    const shortUrl = await URL.findOne({ shortUrl: url })
    if (!shortUrl) {
      res.status(400).json({
        error: 'Url not found',
      })
    } else {
      res.status(200).redirect(`${shortUrl.originalUrl}`)
    }
  } catch (err) {
    res.status(400).json({
      error: err,
    })
  }
}
export default { create, list, redirectTo }
