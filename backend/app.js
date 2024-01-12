// dependencias
const db = require("./database/models/") // banco de dados
const cors = require('cors'); // usar as api local host
const express = require('express'); // servidor
const bcrypt = require('bcryptjs'); // criptografia
const jwt = require('jsonwebtoken') // gerar baren token
const {eAdmin} = require('./middlewares/auth') // middlewares

const app = express()
const port = 3000

app.use(express.json()) // retornar a resposta como json
app.use(cors()) // usar as api local host

// servidor rodando
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// express funcionando
app.get('/', (req, res) => {
  res.send('Hello World!, edit')
})

// login
app.post('/login', async (req, res) => {
  const user = await db.Register.findOne({
    attributes: ['email', 'password'],
    where: {
      email: req.body.email,
    }
  })

  if(user === null){
    return res.status(400).json({
      erro: true,
      mensagem: "Email ou senha inválido! Não cadastrado",
      status: 400,
    })
  }

  if(!(await bcrypt.compare(req.body.password, user.password))){
    return res.status(400).json({
      erro: true,
      mensagem: "Email ou senha inválido! Senha",
      status: 400,
    })
  }

  var token = jwt.sign({id: 1}, "NxJt@9!2L6VT2R@j", {
    expiresIn: '1d'
  })

  return res.json({
    erro: false,
    mensagem: 'login',
    token
  })
})
// cadastrar
app.post('/register', async (req, res) => {
  var data = req.body;
  data.password = await bcrypt.hash(data.password, 8); 

  const user = await db.Register.findAll({
    where: {
      email: req.body.email,
    },
  });

  if (user[0]) {
    return res.status(400).json({ mensagem: "Email já está em uso!" });
  }

  await db.Register.create(data).then(() => {
    return res.json({
      erro: false,
      mensagem: "Cadastrado com sucesso",
     }).catch((() => {
      return res.status(400).json({
          message: 'error'
      })
  }))
  })
 

})
// cartões
app.get('/cards', (req, res) => {
  db.Card.findAll().then((cards) => {
    return res.json({
      id_user: req.userId,
      cards
    })
  }).catch((err) => {
      console.log(err)
  })
})
// criar cartão
app.post('/create-card',eAdmin, (req,res) => {
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
// endereços
app.get('/address', (req, res) => {
  const data = db.Endereco.findAll().then((enderecos) => {
    res.json(enderecos)
  }).catch((err) => {
      console.log(err)
  })
})
// criar endereço
app.post('/create-address',eAdmin, (req,res) => {
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
// pedidos
app.get('/orders', (req, res) => {
  const data = db.Order.findAll().then((orders) => {
    res.json(orders)
  }).catch((err) => {
      console.log(err)
  })
})
// criar pedidos
app.post('/create-order',eAdmin, (req,res) => {
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