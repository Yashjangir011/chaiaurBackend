import dotenv from "dotenv";
dotenv.config({path:'./env'});

import { connectDB } from "./db/index.js";



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`server is running on port ${process.env.PORT || 8000}`)
    } )
})
.catch((err)=>{
    console.log('having issue in connecting to db')
})

















// (async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         application.on("error", (error) => {
//             console.log("Error", error);
//             throw error;
//         });
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//     }
//     catch(error){
//         console.log("Error connecting to MongoDB", error);
//         throw error;
//     }
// })();