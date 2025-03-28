const productModel = require("../../models/productModel")
const getCategoryWiseProduct = async(req, res) => {
    try{
        const {category} = req?.body || req?.query
        const product = await productModel.find({category});

        res.status(201).json({
            data:product,
            message:  "product",
            error: false,
            success: true,
            
        })
    } catch(error) {
        res.status(400).json({
            message:  error.message || error,
            error: true,
            success: false

        })
    }
}    

module.exports = getCategoryWiseProduct
