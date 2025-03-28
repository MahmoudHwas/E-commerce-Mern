const orderModel = require("../../models/orderModel");

async function orderController(request, response) {
    try{
            const currentUserId = request.userId;
            const orderList = await orderModel.find({userId: currentUserId}).sort({createdAt: - 1});


            response.status(201).json({
                data: orderList,
                error: false,
                success: true,
                message: "Order List"
            })
    } catch(err) {
        response.json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = orderController