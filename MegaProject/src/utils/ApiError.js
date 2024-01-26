// Why?
/*
 special class for error already there
 we can extend it using inheritance
 a standard way of sharing erros that 
 other developers will understand it as well.
*/

class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong ",
        errors =[],
        statck =  ""
    ){
        
        super(message);
        this.statusCode=statusCode
        this.data=null
        this.message =message
        this.sucess = false;// api error handle so success not going sucess flag automatically false
        this.errors = errors
    }

    // if(statck){       
    //      this.stack=stack;
    // } 
    // else {
    //                 Error.captureStackTrace(this, this.constructor);

    // }
     
};

export {ApiError}
 