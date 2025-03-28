const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt")
async function userSignUpController(req,res) {
    try{
        const {password, name, email} = req.body;
        const user = await userModel.findOne({email});
        if(user) {
            throw new Error("user already exist")
        }
        
        if(!password) {
            throw new Error("please provide password")
        }
        if(!name) {
            throw new Error("please provide name")
        }
        if(!email) {
            throw new Error("please provide email")
        }
        const slat = bcrypt.genSaltSync(10) 
        const hashedPassword = await bcrypt.hashSync(password, slat);
        if(!hashedPassword) {
            throw new Error("something went wrong")
        }
        const payload = {
            ...req.body,
            role: "GENERAL",
            password: hashedPassword
        }
        const userData = new userModel(payload)
        const saveUser = await userData.save();
        res.status(201).json({
            data:saveUser,
            success:true,
            error:false,
            message: "User Created SuccessFully"
        })
    } catch(error) {
        res.json({
            message:  error.message || error ,
            error: true,
            success: false

        })

        
    }
}
module.exports = userSignUpController
