require('dotenv').config()
const express = require('express')
const massive =require('massive')
const  {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

const app = express();

app.use(express.json())

massive(CONNECTION_STRING).then(db =>{
    app.set('db',db)
    console.log('db connected')
})


app.get('/api/inventory', ctrl.getInventory)
app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} lit n connected 🔥`))

