const mongoose = require('mongoose');

const dbconnect = async ()=>{
    try{
      await mongoose.connect(process.env.DBURL);
      console.log("db connected successfully");
    }
    catch(error){
        console.log("db connection failed");
    }
}

module.exports=dbconnect;