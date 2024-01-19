import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origin: "true"
}

app.get('/',(req, res) => {
    res.send('API is working')
})

//database connection
mongoose.set('strictQuery', false)
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('mongo db is connected')
    }
    catch(err){
        console.log('connection failed')
    }
}

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.listen(port, ()=> {
    connectDB();
    console.log('server is running on port '+port);
})
