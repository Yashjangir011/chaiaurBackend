import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js"
const registerUser = asyncHandler( async (req ,res) => {
   //get user details from frontend
   //validation
   //check if user already exists
   //check for images , check for avatar
   //creat user object create entry in db
   // remove pass and refresh token field form response
   //check for user creation
   //return res


   const { fullname , email , username , password } = req.body;
   
   if([
      fullname , email , username , password
   ].some((field)=> field?.trim()==="" ) 
){
   throw new ApiError(400 , "all fields are required")
}

   const existedUser =  User.findOne({
   $or:[{username } , {email}] // this is for check multiple parameter in arr with objects
  })

  if(existedUser){
   throw new ApiError(409 , " user with email or username already exists")
  }


  


} )
  
export { registerUser }