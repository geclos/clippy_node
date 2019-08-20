const client = require('./lib/elastic')
const express = require('express')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  try {
    const { body } = await client.search({
      index: 'random-index',
      body: { foo: 'bar' }
    })

    res.send(body)
  } catch (e) {
    console.log(e)
    res.send('Error!')
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
