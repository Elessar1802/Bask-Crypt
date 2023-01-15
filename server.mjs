import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

import app from './app.mjs'

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(con => {
    console.log(con.connections)
    console.log('DB connection successful! 😍')
  })

// Listen
const port = process.env.PORT || 8000
app.listen (port, () => {
  console.log(`The server is running on port ${port}...`)
})
