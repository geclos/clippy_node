const client = require('./lib/elastic')

module.exports = async (req, res) => {
  try {
    const payload = client.index({
      index: 'clips',
      body: req.body
    })

    res.status(200).send(payload)
  } catch (e) {
    console.log(e)
    res.rend(e)
  }
}
