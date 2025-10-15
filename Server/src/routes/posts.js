const express = require('express')
const router = express.Router()
const postsCtrl = require('../controllers/postsController')
const auth = require('../middleware/auth')
const sanitize = require('../middleware/sanitize')

router.get('/', postsCtrl.list)
router.get('/:slug', postsCtrl.get)
router.post('/', auth, sanitize, postsCtrl.create)
router.put('/:slug', auth, sanitize, postsCtrl.update)
router.delete('/:slug', auth, postsCtrl.remove)

module.exports = router
