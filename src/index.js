// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import db_connection from "./DBconnection/connection.js";

dotenv.config({
    path: './env'
})

db_connection();











/*

import mongoose from "mongoose"
import { db_name } from "./constants"
import express from "express"
const app=express()// it will create an app 
(async()=>{
    try {
        
        await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)// here we have passed uri and database name 

        app.on("Error",(error)=>{
            console.log(`Error: ${error}`);
            throw error;
        })


        app.listen(process.env.PORT,()=>{
            console.log(`The App is Listening On port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error(`ERROR: ${error}`)
        throw error
    }
})()*/