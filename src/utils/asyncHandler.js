const asyncHandler = (requestHandler)=>{
    return (req ,res , next) =>{
        Promise.resolve(requestHandler(req,res ,next))
        .catch((err)=>next(err))
    }
}



export { asyncHandler }








// this is bascially for try catch we can do it with promise format

// const asyncHandler=(fn)=> async(req , res ,next)=>{
//     try{
//         await fn(req ,res ,next)
//     }catch(error){
//         res.status(err.code || 500).json({
//             success:false,
//             messsage:err.messsage
//         }) 
//     }
// }