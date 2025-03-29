// INSIDE app.js FILE WE WILL IMPORT EXPRESS.JS FOR starting server using app.listen()
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-oarse'
const app=express();

//HERE USE METHOD IS USED TO APPLY MIDDLEWARE ON OUR APPLICATION IT WILL TAKES AN CORS 
//IT CAN MODIFY res()and req() objects 
// It can be used for things like CORS, authentication, logging, parsing JSON, and serving static files.
// If no path is specified, it applies to all routes.


app.use(cors())// IT WILL ENABLES CORS FOR ALL ORIGINs 



// this will enables cors for specific origin
// app.use(cors({
//     origin:'http://localhost:3000' WE CAN ORIGIN FROM .ENV FILE 
// }))


/* Express configuration */

app.use(express.json({limit:"16kb"}))// we can set json limit
app.use(express.urlencoded({extended:true,limit:'16kb'}))//
app.use(express.static("public"))


// cookie-parser

app.use(cookieParserarser())



export default app;