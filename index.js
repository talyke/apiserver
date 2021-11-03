
const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()
const errorHandler = require('./middleware/errors')

const PORT = process.env.PORT || 3000

const app = express()

// Rate Limiting
const limiter = rateLimit({
    windowMS: 10 * 60 * 1000 // total: 10 minutes
})
app.use(limiter)

app.set('trust proxy', 1)

// Routes
app.use('/api', require('./routes'))

// Sets static folder
app.use(express.static('public'))

app.use(cors())

app.use(errorHandler)

app.listen(PORT, () => console.log(`server running on ${PORT}`))
