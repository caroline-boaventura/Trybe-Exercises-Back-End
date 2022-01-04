const cepModel = require('../models/cepModel');

const getCEP = async (cepParam) => {
  const regexCEP = /\d{5}-\d{3}/;

  const cepIsValid = regexCEP.test(cepParam);

  if (!cepIsValid) throw { error: { code: "invalidData", message: "CEP inválido" } };

  const result = await cepModel.getCEP(cepParam);

  if (result.length === 0) throw { error: { code: "notFound", message: "CEP não encontrado" } }

  const { cep, logradouro, bairro, localidade, uf } = result;

  return {
    cep,
    logradouro,
    bairro,
    localidade,
    uf
  }
}

// const createCEPService = async (cep, logradouro, bairro, localidade, uf) => {
  
// }

module.exports = {
  getCEP,
  createCEPService,
}
