const express = require('express')
const router = express.Router()
const tutorialsCtrl = require('../controllers/tutorialsController')
const auth = require('../middleware/auth')
const sanitize = require('../middleware/sanitize')

router.get('/', tutorialsCtrl.list)
router.get('/:slug', tutorialsCtrl.get)
router.post('/', auth, sanitize, tutorialsCtrl.create)
router.put('/:slug', auth, sanitize, tutorialsCtrl.update)
router.delete('/:slug', auth, tutorialsCtrl.remove)

module.exports = router
