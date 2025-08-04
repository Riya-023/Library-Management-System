import mongoose from "mongoose";

export const connectDB = () =>{
    // to connect mongodb to backend
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"library_management"
    }).then(()=>{
        console.log(`Database connected succesfully`)
    }).catch(err=>{
        console.log('Error connecting to database', err);
    })
}