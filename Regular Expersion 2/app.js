let re;

re = /hello/;


//Metacharacters Symbols

 re = /^hello/i         //Must start width
 re = / world$/;       // Must end width  
 re = /^hello$/i ;      // Must start and end width
 re = /h.llo/i ;       //Matches any ONE character
 re = /h*llo/i;        //match any character from 0 or more times
 re = /gra?e?y/     //optional characters 
 re = /gray\?/    //Escaping Character

 //Bracket [] -- character set
   re =/gr[ae]y/;
   re = /[GF]ray/;
   re = /[^GF]ray/;
   re = /[a-z]ray/;
   re = /[A-Z]ray/;
   re = /[A-Za-z]ray/;
   re = /[0-9][0-9]ray/;

 //Brace {} -- Quantifire
    re = /hel{2}o/;
    re = /hel{2,4}o/;
    re = /hel{2,}o/;

//Parentheses  () -- Grouping
re = /^([0-9]x){3}$/

// Shorthand charcters
re = /\w/ //all alphanumeric and _ ----- wrod character
re = /\w+/ //all alphanumeric and _
re = /\W/ //none word character
re = /\d/ // digit
re = /\d+/ // digit
re = /\D/ // None digit
re = /\s/ // digit
re = /\d/ // word boundary
re = /hell\b/;

//Assertions

re = /x(?!y)/



let str = "dsfasdfsxsdfzxyasdfsdfx";


let result = re.exec(str);
console.log(result);
reTest(re ,str);

function reTest(re , str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} does not match ${re.source}`);
    }
}



