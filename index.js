import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import errorController from './errorController.js'

const app = express()

const corsOptions = {
    origin: '*',
    methods: '*',
    allowedHeaders: '*'
  };

app.use(express.json())
app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))


app.get('/openbanking/sandbox/accesscode/timezone',(req,res)=>res.json({"status": "success","message": "La transacción ha sido aprobada","transactionId": "123456789"}))
app.get('/',(req,res)=>res.json({"status": "success","Hola Mundo": "Hola Mundo","transactionId": "Hola Mundo"}))
app.use(errorController.error404)

app.listen(3000,()=>console.log('listen port 3000'))

export {app};