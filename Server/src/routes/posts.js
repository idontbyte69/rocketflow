const express = require('express')
const router = express.Router()
const postsCtrl = require('../controllers/postsController')
const auth = require('../middleware/auth')

router.get('/', postsCtrl.list)
router.get('/:slug', postsCtrl.get)
router.post('/', auth, postsCtrl.create)
router.put('/:slug', auth, postsCtrl.update)
router.delete('/:slug', auth, postsCtrl.remove)

module.exports = router
