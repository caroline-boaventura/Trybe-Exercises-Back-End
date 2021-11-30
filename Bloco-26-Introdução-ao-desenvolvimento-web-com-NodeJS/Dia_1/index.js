const readline = require('readline-sync');
const IMC = require('./imc');
const carSpeed = require('./velocidade');
const gameRun = require('./sorteio');

const list = ['Cálculo de IMC', 'Cálculo de Velocidade', 'Jogo Sorteio'];
const index = readline.keyInSelect(list, 'Qual dos itens?')

if (index === 0) {
  return IMC();
};

if (index === 1) {
  return carSpeed();
}

if (index === 2) {
  return gameRun();
}