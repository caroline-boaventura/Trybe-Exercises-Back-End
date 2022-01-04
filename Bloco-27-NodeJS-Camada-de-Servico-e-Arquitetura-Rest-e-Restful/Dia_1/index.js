const express = require('express');
const bodyParser = require('body-parser');

const User = require('./models/users.model');

const app = express();

app.use(bodyParser.json());

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!User.isValid(firstName, lastName, email, password)) {
    return res.status(400).json({
      error: true,
      message: 'Campo obrigatório'
    })
  }

  if(!User.password(password)) {
    return res.status(400).json({
      error: true,
      message: 'O campo "password" deve ter pelo menos 6 caracteres'
    })
  }

  const id = await User.create(firstName, lastName, email, password);

  res.status(201).json({
    id: id,
    firstName,
    lastName, 
    email
  })
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});