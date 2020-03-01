const express = require('express')
const bcryptjs = require('bcryptjs')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())