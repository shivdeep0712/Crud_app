const express = require('express');
const dotenv=require('dotenv');
const cors = require('cors')
const dbconnect=require('./config/dbconnect')

const userRoutes=require('./routes/userRoutes');
const userDetails = require('./routes/userDetails');
const app = express();
dotenv.config();
const PORT=process.env.PORT || 4000


app.use(express.json())
app.use(cors());


dbconnect();


app.use('/api/v1/auth',userRoutes)
app.use('/api/v1/userDetails',userDetails)






app.listen(4000,(req,res)=>{
    console.log(`app is listening at port ${PORT}`)
})