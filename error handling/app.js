
   

    
  

  
  


   
   

    //throw custom Error;
    

let user = {email:'jdoe@gmail.com'};

try{
    //RefrenceError
    //myFunc();
    //Type Error
    //null.myFunc();
      //Syntax Error
    //  eval('Hello world!');
     //URIError
     //decodeURIComponent('%');

    if(!user.name){
        throw ReferenceError('User has no name');
    }



}catch(e){
    console.log(e);
    // console.log(e.name);
    // console.log(e.message);
    // console.log(e instanceof TypeError);
}finally{
    console.log('finally block is running...');
}


console.log('code countinus...');
