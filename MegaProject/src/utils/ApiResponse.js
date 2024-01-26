class ApiResponse {
    constructor(statusCode, data, message ="sucess"
    ){
      this.statusCode =statusCode
      this.data=data
      this.message =message
      this.success =  statusCode
    }

};

// different status codes for responses
//each organization has differnt list for these status codes.


//General status codes.
// 1.Informational responses 100-199
// 2.Sucessful responses  200-299
//3. Redirection messages 300-399
//4. Client error responses 400-499
//5. server error responses 500-599
