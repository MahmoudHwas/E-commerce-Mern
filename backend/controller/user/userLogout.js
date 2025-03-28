async function userLogout(req, res) {
    try{
        res.clearCookie("token");
        res.status(201).json({
            message: " Logged out successfully",
            error: false,
            success: true,
            data: []
        })
    }catch(error) {
        res.status(400).json({
            message:  error.message || error,
            error: true,
            success: false

        })
    }
};

module.exports = userLogout