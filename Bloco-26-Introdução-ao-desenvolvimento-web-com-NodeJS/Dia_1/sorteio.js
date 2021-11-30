const readline = require('readline-sync');

const logResponse = () => {
  const inputNumber = readline.questionInt('Digite um número de 0 a 10: ');

  const randomNumber = parseInt(Math.random() * 10);

  if (inputNumber !== randomNumber) {
    return `Opa, não foi dessa vez. O número era ${randomNumber}`
  }

  return 'Parabéns, número correto' 
}

const gameRun = () => {
  console.log(logResponse());

  const inputNewGame = readline.question('Jogar novamente? [s/n] ');

  if (inputNewGame === 's' || inputNewGame === 'S') {
    gameRun();
  } else {
    console.log('Ok, até a próxima!')
  }
}

module.exports = gameRun;