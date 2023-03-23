require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express();


const port  = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.DB_CONN)
.then(()=> console.log('Database Connected...'))
.catch(err => console.log(err))


app.post('/register', (req, res)=> {

})

app.listen(port, ()=> {
      console.log(`Server running on port ${port}`)
})