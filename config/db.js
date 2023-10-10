import mongoose from 'mongoose'
import 'dotenv/config'

const localdb = 'mongodb://127.0.0.1:27017/organizerDatabase'

const MONGODB_URI = process.env.MONGODB_URI

const currentDB = process.env.DEPLOYED === 'no' ? localdb : MONGODB_URI

mongoose.connect(currentDB)

const db = mongoose.connection

export default db
