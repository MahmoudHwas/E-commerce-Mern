const productModel = require("../../models/productModel")
const uploadProductPermission = require("../../helpers/permission");

async function updateProductController(req, res) {
        try{

            if(!uploadProductPermission(req.userId)) {
                throw new Error("Permission denied")
            }

            const {_id, ...resBody} = req.body;

            const updateProduct = await productModel.findByIdAndUpdate(_id,resBody);
            res.status(210).json({
                message: "Product Updated Successfully",
                data: updateProduct,
                error: false,
                success: true
    
            })

        } catch(error) {
            res.status(400).json({
                message:  error.message || error,
                error: true,
                success: false
    
            })
        }
}

module.exports = updateProductController