const db = require("./database/models/")


const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(express.json())
app.use(cors())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!, edit')
})

app.get('/cards', (req, res) => {
  const data = db.Card.findAll().then((cards) => {
    res.json(cards)
  }).catch((err) => {
      console.log(err)
  })
})

app.post('/create-card', (req,res) => {
  var data = req.body;

  db.Card.create(data).then((cardUser) =>{
      return res.json({
          error: false,
          message: 'Cartão cadastrado',
          data: cardUser
      })
  }).catch((() => {
      return res.json({
          message: 'error'
      })
  }))
})

app.get('/address', (req, res) => {
  const data = db.Endereco.findAll().then((enderecos) => {
    res.json(enderecos)
  }).catch((err) => {
      console.log(err)
  })
})

app.post('/create-address', (req,res) => {
  var data = req.body;

  db.Endereco.create(data).then((addressUser) =>{
      return res.json({
          error: false,
          message: 'Endereços cadastrado',
          data: addressUser
      })
  }).catch((() => {
      return res.json({
          message: 'error'
      })
  }))
})

app.get('/orders', (req, res) => {
  const data = db.Order.findAll().then((orders) => {
    res.json(orders)
  }).catch((err) => {
      console.log(err)
  })
})

app.post('/create-order', (req,res) => {
  var data = req.body;

  db.Order.create(data).then((orderUser) =>{
      return res.json({
          error: false,
          message: 'Pedido cadastrado',
          data: orderUser
      })
  }).catch((() => {
      return res.json({
          message: 'error'
      })
  }))
})