const express = require('express')
const router = express.Router()
const tutorialsCtrl = require('../controllers/tutorialsController')
const auth = require('../middleware/auth')

router.get('/', tutorialsCtrl.list)
router.get('/:slug', tutorialsCtrl.get)
router.post('/', auth, tutorialsCtrl.create)
router.put('/:slug', auth, tutorialsCtrl.update)
router.delete('/:slug', auth, tutorialsCtrl.remove)

module.exports = router
