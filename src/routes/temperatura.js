import express from 'express'
import ControllerTemperatura from '../controllers/temperatura.js'
const router = express.Router()

//preimeiro parametro é p endpoint
router.post('/celFah', ControllerTemperatura.convertCelToFah)
export default router