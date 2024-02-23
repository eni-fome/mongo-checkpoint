const express = require('express');
const { urlencoded } = require('express');
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3000
const connectDB = require('./config/db')

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use ('/contact', require('./routes/useRoutes.js'))


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
}) 