const client = require('./lib/elastic')

module.exports = async (req, res) => {
  try {
    const params = buildSearchQuery(req.query)

    console.log(JSON.stringify(params, null, 2))
    const { body } = await client.search(params)

    res.status(200).send(body.hits.hits)
  } catch (e) {
    res.send(e)
  }
}

function buildSearchQuery (params) {
  const result = {
    index: params.index,
    body: {}
  }

  if (params.tags || params.text) { result.body.query = { match: {} } }
  if (params.tags) result.body.query.match = { tags: params.tags }
  if (params.text) result.body.query.match = { ...result.body.query.match, text: params.text }

  return result
}
