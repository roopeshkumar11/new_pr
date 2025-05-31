import mongoose from "mongoose";
import { DB_name } from "./dbname.js";


const connectDb=async()=>{

    try {
    const connectinstance= await mongoose.connect(`${process.env.URL}/${DB_name}`);
     console.log(`MongoDB connected! DB Host: ${connectinstance.connection.host}`);
    

        
    } catch (error) {

       console.error("Error connecting to MongoDB:", error.message);
       process.exit(1);

        
    }

}

export default connectDb