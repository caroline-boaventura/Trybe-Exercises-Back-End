const express = require('express');
const bodyParser = require('body-parser');

const errorMiddleware = require('./ middlewares/errorMiddleware');
const cepController = require('./controllers/cepController');

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.get('/ping', (req, res, next) => {

  res.status(200).json({ message: 'pong!' })
})

app.get('/cep/:cep', cepController.getCEP);
app.post('/cep', cepController.createCEP);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`)
});
