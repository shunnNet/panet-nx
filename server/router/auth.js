const jwt = require('jsonwebtoken')

const express = require('express')
const router = express.Router()

const SECRET = 'SECRET MAKES WOMAN WOMAN'
const userMock = { user: { name: 'Net Chen', _id: 3345678, photo:"/sample_admin.jpg" } }

router.post('/login', (req, res) => {
  const token = jwt.sign(userMock, SECRET)
  res.json({
    token,
  })
})
router.post('/logout', (req, res) => {
  res.json({ msg: 'logout successfully' })
})
router.get('/user', (req, res) => {
  res.json(userMock)
})

module.exports = router
