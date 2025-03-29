
import mongoose, { mongo } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const userSchema= new mongoose.Schema(
{
   userName:{  type:String,
     required:true,
     unique:true,
     index:true,
     lowercase:true,
     trim:true   
    },

    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true
    },
    fullName:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    avtar:{
        type:String, // we are using cloudanary url 
        required:true
    },

    coverimg:{
        type:String, // we are using cloudanary url 

    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
    
        }
    ],
    password:{
        type:String,
        required:true
    }     
 },{
    timestamps:true
 }
)

const saltRounds=10;/*The saltRounds parameter in bcrypt defines how many times the password hashing function will be executed. 
                     It determines how much "work" is required to calculate a hash.*/


userSchema.pre("save",function (next) {
   if (!this.isModified("password")) return next() // if password is modified then only password will hash means some numbers or alphabates added into the original password 
    this.password=bcrypt.hash(this.password,saltRounds)//  bcrypt is used to password hashing to improve security of the application 

    next()
    
})


// here we are adding a method  inside userSchema methods for validate password  this is the feature of the mpngoose
userSchema.methods.isPassordCorrect=async function(password){

    return  await bcrypt.compare(password,this.password)//we are passing encrypted password using this.password  and will compare and return true or false

}
userSchema.methods.accessTokenSecret=function(){
/*
 The jwt.sign() method in JSON Web Token (JWT) is used when you want to generate
 a signed token for authentication or authorization purposes. You typically use it when:
 When a user logs in, you generate a token with their user details and send it back to them. 
 This token is then used to verify their identity in future requests.
*/

return jwt.sign({
     _id:this._id,
     userName:this.userName,
     email:this.email,
     fullName:this.fullName,

},process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_SECRET_EXPIRY})

}

userSchema.methods.accessRefreshTokenSecret=function(){
return jwt.sign({
    _id:this._id// it has less info in that bcoz it will refresh everytime 
},process.env.ACCESS_REFRESH_TOKEN_SECRET,{expiresIn:process.env.ACCESS_REFRESH_TOKEN_SECRET_EXPIRY})
}
export const User=mongoose.model('User',userSchema) 