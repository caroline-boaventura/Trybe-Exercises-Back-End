const connection = require('./connection');

const isValid = (firstName, lastName, email, password) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (!email || typeof email !== 'string') return false;
  if (!password || typeof password !== 'string') return false;

  return true;
};

const password = (password) => {
  if (password.length < 6) return false;

  return true;
}

const create = async (firstName, lastName, email, password) => {
  const result = await connection()
    .then((db) => db.collection('user').insertOne({ firstName, lastName, email, password }))
    .then((result) => result);
  
  return result.insertedId;
}

module.exports = {
  isValid,
  create,
  password
}