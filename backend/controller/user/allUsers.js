const userModel = require("../../models/userModel")
async function allUsers(req, res) {
    try{
   
        const allUsers = await userModel.find();
        res.json({
            data: allUsers,
            success: true,
            error:false,
            message: "all user sent",
        })
    }catch(error) {
        res.status(400).json({
            message:  error.message || error,
            error: true,
            success: false

        })
    }
       
}
module.exports = allUsers