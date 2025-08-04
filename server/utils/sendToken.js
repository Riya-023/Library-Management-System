export const sendToken = (user, statusCode, message, res) => {
    try {
        const token = user.generateToken();
        const cookieExpireDays = Number(process.env.COOKIE_EXPIRE) || 3;

        res.status(statusCode)
            .cookie("token", token, {
                expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000),
                httpOnly: true,
            })
            .json({
                success: true,
                user,
                message,
                token,
            });
    } catch (error) {
        console.error("Error in sendToken:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};
