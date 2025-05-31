import mongoose from "mongoose";
import { DB_name } from "./dbname.js";


const connectDb=async()=>{

    try {
    const connectinstance= await mongoose.connect(`${process.env.URL}/${DB_name}`);
     console.log(`MongoDB connected! DB Host: ${connectinstance.connection.host}`);
     console.log("DB_name",DB_name)

        
    } catch (error) {

       console.error("Error connecting to MongoDB:", error.message);
       process.exit(1);

        
    }

}

export default connectDb