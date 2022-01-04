const errors = {
  invalidData: 400,
  notFound: 404,
}

const error = (err, req, res, next) => {
  if (err.error) {
    const { error } = err;
    const { code, message } = error;

    return res.status(errors[code]).json({ error })
  }

  return res.status(500).json({ message: 'Internal Error' });
};

module.exports = error;
