import mongoose from "mongoose";
import { db_name } from "../constants.js";

const db_connection= async ()=>{
    
try {
    const connectionObj =await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log(`✅ MongoDB connected! DB Name: ${connectionObj.connection.db.databaseName}`);
    console.log(`\n mongoDb connected...!! DB Host ${connectionObj.connection.host}`);
    
} catch (error) {
    console.error(`Error: ${error}`)
    throw error
}    

}

export default db_connection;