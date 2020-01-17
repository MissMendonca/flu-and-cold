function text(user_input){
    // regular expressions regex to search for numbers and letters in a string
    var letterNumber = /^[0-9a-zA-z]+$/;
    // regex to search for only numbers in a string
    var isNum = /^\d+$/;
    
    if ( !isNum.test(user_input) && user_input.match(letterNumber)){
         return true;  
    }
    else{
        return false;
    }
}