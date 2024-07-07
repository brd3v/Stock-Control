const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const User = require('./models/Schema')
const routes =require('./Routes/routes')
app.use(express.json())
app.use(cors()); // E esta linha para permitir todas as origens

app.use('/api', routes)

main().catch(err => console.log(err))

async function main () {
    await mongoose.connect('mongodb+srv://bnsiq2015:123@cluster0.8zqsavp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    return console.log('conecatado ao mongo')
}







console.log()
app.listen(3000, () => console.log('online'))