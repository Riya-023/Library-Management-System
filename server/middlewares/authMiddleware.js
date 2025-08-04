import jwt from "jsonwebtoken";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./errorMiddleware.js";
import { User } from "../models/UserModels.js";


export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;
    // console.log("Token from cookie:", token); 
    if (!token) {
        return next(new ErrorHandler("User is not authenticated.", 400));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // console.log(decoded);
    req.user = await User.findById(decoded.id);
    // console.log("Found user:", req.user);
    next();
})


export const isAuthorized = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`User with this role (${req.user.role}) not allowed to access this resource.`,
                400
            )
            );
        }
        next();
    }
}