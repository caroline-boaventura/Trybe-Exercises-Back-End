const cepServices = require('../services/cepServices');
const joi = require('joi');

const getCEP = async (req, res, next) => {
  try {
    const { cep } = req.params;

    const result = await cepServices.getCEP(cep);

    return res.status(200).json(result);

  } catch (err) {
    console.log(err.message);
    return next(err);
  }
}

const createCEP = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const result = await cepServices.createCEPService(cep, logradouro, bairro, localidade, uf);

  return result;
}

module.exports = {
  getCEP,
  createCEP,
}
