import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import userRouter from './routes/userRoutes.js';
import razorpayRoutes from './razorpayRoutes.js';
import bodyParser from 'body-parser';

dotenv.config(); //fetches variables from dotenv file
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connected to db');
}).catch((err)=>{
    console.log(err.message);
  });

const app = express(); //creating express app
app.use(express.static('static'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());



app.use('/api/seed', seedRouter);
app.use('/api/users', userRouter);
app.use('/api/razorpay', razorpayRoutes);

app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`serve at http://127.0.0.1:${port}`);
});