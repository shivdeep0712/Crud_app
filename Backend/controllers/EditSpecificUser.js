const userDetails=require('../models/userDetails')
const EditSpecificUser=async(req,res)=>{
try{
    console.log("req_ki_body_printing->",req.body)
const {id}=req.params;
 const updatedUser= await userDetails.findByIdAndUpdate(id,{$set:req.body},{new:true}) 
 if(!updatedUser){
    return res.status(404).json({
        success:false,
        message:"user for updation not found",

    })
 }
 res.status(200).json({
    success:true,
    message:"user updated successfully",
    updatedUser:updatedUser
 })
}
catch(error){
    res.status(500).json({
        success:false,
        message:"user not updated",
    })
}
}
module.exports=EditSpecificUser;