//type 1
const asyncHandler = (fn)=> async (err,req,res,next)=> {
    try{
               await fn(err,req,res,next)
    }
    catch(error)
    {
        res.status(err.code || 500 ).json({
            status: false, //good for frontend dev,can know about that response is false and not recieved.
            message : err.message
        })
    }
}


//type 2
//to understand it later ...
/*
 const asyncHandler= (requestHandler)=>{
           (req,res,next)=>{
            Promise.resolve(requestHandler(req,res,next)).catch(err=>next(err))
           }
 }
 */
export {asyncHandler}