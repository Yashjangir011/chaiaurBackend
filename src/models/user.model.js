import mongoose  from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required :true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },email:{
            type:String,
            required :true,
            unique:true,
            lowercase:true,
            trim:true,
        },fullname:{
            type:String,
            unique:true,
            lowercase:true,
            trim:true,
        },avatar:{
            type:String,
            required:true,
        },coveriamge:{
            type:String
        },watchhistory: [
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Video"
            }
        ],password:{
            type:String,
            required :[true , "password is required"],
        },
        referenceToken:{
            type:String
        }
    },{timestamps:true})

export const User = mongoose.model("User" , userSchema)