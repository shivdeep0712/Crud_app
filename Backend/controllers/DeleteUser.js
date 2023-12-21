const userDetails=require('../models/userDetails')
const DeleteUser = async(req,res)=>{
    try{
        const {id}=req.params;
        console.log("id for del",id)
        const deletedUser=await userDetails.findByIdAndDelete({_id:id});
        res.status(200).json({
            success:true,
            message:"user deleted successfully",
            deletedUser:deletedUser
        })

    }
    catch(error){
        res.status(400).json({
            success:false,
            message:"user not deleted",
        })
    }
}
module.exports=DeleteUser;