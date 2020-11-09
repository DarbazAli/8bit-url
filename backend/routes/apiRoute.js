import express from 'express'
import apiCtrl from '../controllers/apiController.js'

const router = express.Router()

router.route('/api/url').post(apiCtrl.create).get(apiCtrl.list)

export default router
