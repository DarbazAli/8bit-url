import mongoose from 'mongoose'

const urlSchema = mongoose.Schema({
  originalUrl: {
    type: String,
    trim: true,
    unique: 'URL is already exist',
    required: 'URL is required',
  },
  shortUrl: {
    type: String,
    trim: true,
  },
})

export default mongoose.model('URL', urlSchema)
