const router = require('express').Router()
const { items } = require('../db')

router.post('/items', (req, res) => {
  items.push(req.body.item)
  res.sendStatus(200)
})

router.get('/items', (req, res) => {
  res.json(items)
})

module.exports = router
