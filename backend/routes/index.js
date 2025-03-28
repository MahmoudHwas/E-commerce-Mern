const express = require("express");
const  userSignUpController  = require("../controller/user/userSignUp");
const userSignIpController = require("../controller/user/userSignIn");
const authToken = require("../middleware/authToken");
const userDetailsController = require("../controller/user/userDetails");
const userLogout = require("../controller/user/userLogout");
const allUsers = require("../controller/user/allUsers");
const updateUser = require("../controller/user/updateUser");
const uploadProductController = require("../controller/product/uploadProduct");
const getProductController = require("../controller/product/getProduct");
const updateProductController = require("../controller/product/updateProduct");
const getCategoryProduct = require("../controller/product/getCategoryProductOne");
const getCategoryWiseProduct = require("../controller/product/getCategoryWiseProduct");
const getProductDetails = require("../controller/product/getProductDetails");
const addToCartController = require("../controller/user/addToCartController");
const countAddToCartProduct = require("../controller/user/countAddToCartProduct");
const addToCartViewProduct = require("../controller/user/addToCartViewProduct");
const updateAddToCartProduct = require("../controller/user/updateAddToCartProduct");
const deleteAddToCartProduct = require("../controller/user/deleteAddToCartProduct");
const searchProduct = require("../controller/product/searchProduct");
const filterProductController = require("../controller/product/filterProduct");
const paymentController = require("../controller/order/paymentController");
const webhooks = require("../controller/order/webhook");
const orderController = require("../controller/order/orderController");
const allOrderController = require("../controller/order/allOrderController");
const router = express.Router();


router.post("/signup", userSignUpController)
router.post("/signin", userSignIpController)
router.get("/user-details", authToken, userDetailsController)
router.get("/userLogout", userLogout)

// admin panel 
router.get("/all-user",authToken, allUsers)
router.post("/update-user",authToken, updateUser);


// upload product
router.post("/upload-product",authToken, uploadProductController)
router.get("/all-product", getProductController)
router.post("/update-product",authToken, updateProductController)
router.get("/get-categoryProduct", getCategoryProduct)
router.post("/category-product", getCategoryWiseProduct)
router.post("/product-details", getProductDetails)
router.get("/search", searchProduct)
router.post("/filter-product",filterProductController)

//user add to cart
router.post("/addtocart",authToken, addToCartController)
router.get("/countAddToCartProduct",authToken, countAddToCartProduct)
router.get("/view-card-product",authToken, addToCartViewProduct)
router.post("/update-card-product",authToken, updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)

// payment and order 
router.post("/checkout",authToken,paymentController)
router.post("/webhook",webhooks)
router.get("/order-list",authToken,orderController)
router.get("/all-order",authToken,allOrderController)


module.exports = router