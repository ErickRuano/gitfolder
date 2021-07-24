const api = require('@satelite/api')

module.exports = (req, res) => {
  console.log(req.method)
  api.hello()
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });
};