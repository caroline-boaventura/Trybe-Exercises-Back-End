const readline = require('readline-sync');

const calculeIMC = () => {
  const userHeight = readline.questionFloat('Qual sua altura? ');
  const userWeight = readline.questionFloat('Qual seu peso? ');
  
  const userIMC = (userWeight / (userHeight ^ 2)).toFixed(1);
  
  console.log(`Seu IMC é de ${userIMC}`);
  
  const imcCategory = (IMC) => {
    if (IMC < 18.5) {
      console.log('Categoria: Abaixo do peso (magreza)')
    } else if (IMC >= 18.5 && IMC <= 24.9) {
      console.log('Categoria: Peso normal')
    } else if (IMC >= 25 && IMC <= 29.9) {
      console.log('Categoria: Acima do peso (sobrepeso)')
    } else if (IMC >= 30 && IMC <= 34.9) {
      console.log('Categoria: Obesidade grau I')
    } else if (IMC >= 35 && IMC <= 39.9) {
      console.log('Categoria: Obesidade grau II')
    } else if (IMC >= 40) {
      console.log('Categoria: Obesidade grau III e IV')
    }
  };
  
  console.log(imcCategory(userIMC));
}

module.exports = calculeIMC;