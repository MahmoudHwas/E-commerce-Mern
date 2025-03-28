const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
async function userSignInController(req, res) {
        try{
            const {email, password} = req.body;
            if(!password) {
                throw new Error("please provide password")
            }
            if(!email) {
                throw new Error("please provide email")
            }

            const user = await userModel.findOne({email});

            if(!user) {
                throw new Error("user not found")
            }
            const checkPassword = await bcrypt.compare(password, user.password);
            const tokenData = {
                    _id: user._id,
                    email: user.email
            }
            if(checkPassword){
                const token =  await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: 60 * 60 * 8});
                const tokenOption ={
                    httpOnly: true,
                    secure: true,
                    sameSite: "None"
                }
                res.cookie("token", token,tokenOption).status(200).json({
                    message: "Login successfully",
                     data: token,
                     success: true,
                     error: false})
            } else {
                throw new Error("please check password")
            }
             
                
        } catch(error) {
            res.json({
                message:  error.message || error ,
                error: true,
                success: false
    
            })
    
            
        }
}

module.exports = userSignInController