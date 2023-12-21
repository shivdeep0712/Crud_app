const userDetails=require('../models/userDetails')

const GetAllData=async(req,res)=>{
    try{
const allData=await userDetails.find();
res.status(200).json({
    success:true,
    allUsers:allData,
    message:"all data sent to frontend"
})
    }
    catch(error){
        res.status(500).json({
            success:false,
           
            message:"something went wrong while fetching all users"
        })
    }

}

module.exports=GetAllData;