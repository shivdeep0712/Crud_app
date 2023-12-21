
const userDetails= require('../models/userDetails');
const AddData=async(req,res)=>{
try{
  
    const {name, email, age, mobile, work, add, desc } = req.body;
    if(!name || !email || !work || !add || !mobile || !desc || !age){
        return res.status(409).json({
            success: false,
            message: "all fields are required"
        });
    }
      const createdUser= await userDetails.create({name, email, work, add, mobile, desc, age});
      res.status(200).json({
        success: true,
        data:createdUser,
        message: "userDetails added successful"
    });
}
catch(error){
    res.status(500).json({
        success: false,
        message: "something went wrong"
    });

}
}

module.exports=AddData;