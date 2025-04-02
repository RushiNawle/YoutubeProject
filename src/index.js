// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import db_connection from "./DBconnection/connection.js";
import app from "./app.js";

dotenv.config({
    path: './env'
})// we have to make all .env veriable availble for everywhere in the project
//  as sson as possible thats why we have to config them

db_connection()// async function always returns promise so we have to used .then() and .catch()
.then(()=>{

  app.listen(process.env.PORT||8000,()=>{
    console.log(`SERVER STARTED ON THE PORT ${process.env.PORT}`);
  })
})
.catch((error)=>{
    console.log(`Database connection occured ${error}`);
    
})











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