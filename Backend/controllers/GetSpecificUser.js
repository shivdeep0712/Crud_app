const userDetails = require('../models/userDetails');

const GetSpecificUser = async (req, res) => {
  try {
    const  {id}  = req.params;
    console.log("line1")
    console.log(req.params);
    console.log(id)
    console.log({id})
    // Remove the {} around _id:id
    const userFounded = await userDetails.findById(id);

    if (!userFounded) {
      // Handle the case when the user is not found
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      specificUser: userFounded,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({
      success: false,
      message: "User not fetched",
    });
  }
};

module.exports = GetSpecificUser;
