const productModel = require("../../models/productModel")

async function getProductController(req, res) {
        try{
            const allUser = await productModel.find().sort({createdAt: -1});
            res.json({
                data: allUser,
                success: true,
                error:false,
                message: "all Products",
            })

        } catch(error) {
            res.status(400).json({
                message:  error.message || error,
                error: true,
                success: false
    
            })
        }
}   

module.exports = getProductController