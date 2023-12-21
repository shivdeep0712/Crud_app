const User=require('../models/User')
const Login=async(req,res)=>{
    try {
        console.log("hello jaya",req.body)
        const { email,password } = req.body;
        if(!email || !password){
            return res.status(404).json({success:false,message:"all fields are required"})
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success : false,message: "user not registered"});
        }
        if (password !== user.password) {
            return res.status(401).json({ success : false, message: "enter correct password" });
        }
        res.status(200).json({success : true,  message: "user successfully logged in" , userDetails :{email} })
    }
    catch (error) {
        res.status(500).json({success : false,  message: "not able to logged in" });
    }

}

module.exports=Login;