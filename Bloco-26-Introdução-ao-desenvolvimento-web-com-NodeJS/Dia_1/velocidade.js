const readline = require('readline-sync');

const carSpeedFunc = () => {
  const distanceToGo = readline.questionInt('Distância percorrida (em metros): ');
  const timeToGo = readline.questionFloat('Tempo total (em segundos): ');
  
  const carSpeed = (distanceToGo / timeToGo).toFixed(1);
  
  console.log(`A velocidade é de ${carSpeed} m/s`);
}

module.exports = carSpeedFunc;
