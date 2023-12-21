const User=require('../models/User');


const Signup=async(req,res) => {
  console.log("backend tk pauch gya 2")
      try {
          const { email, name, password } = req.body;
          if(!email || !name || !password){
             return res.status(402).json({
                success:false,
                message:"all fields are required"
             })
          }
          console.log(req.body);
          let check=false;
          let existingdata=await User.findOne({ email })
          console.log(existingdata)
          if (existingdata) {
              check=true;
              console.log("inside bro")
              return res.status(409).json({
                  success: false,
                  message: "user already registered"
  
              });
  
          }
          console.log("back bro")
  
          if(check==false) 
          console.log("1");
  //  let data=req.body
  // console.log(data);
          let newuser =await  User.create({email,name,password});
          console.log("2");
          // await newuser.save();
          console.log("3");
          // res.status().json({
         res.status(201).json({
              success: true,
              message: "user registration done successful"
          });
          console.log("4");
          return ;
      }
      catch (error) {
          console.log("5")
          console.log(error.message)
          res.status(500).json({
              
              success: false,
              message: "user registration failed due to some interal server issues"
          });
      }
  }

  module.exports=Signup;