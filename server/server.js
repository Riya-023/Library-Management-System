import {app} from "./app.js";
import {v2 as cloudinary} from "cloudinary"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CILENT_NAME,
    api_key:process.env.CLOUDINARY_CILENT_API,
    api_secret: process.env.CLOUDINARY_CILENT_SECRET,
})

// process.env is used to securely access environment variables defined in your .env file in a Node.js app.
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT} `);
})