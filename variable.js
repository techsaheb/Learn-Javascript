//variable declared
//1. automatic declared
    x = 5;
    y = 10;
    console.log(x+y);

//2. using var
    var a = 10;
    var b = 20;
    console.log(a+b);


//3.using let  
    let e = 60;
    let f = 50;
    console.log(e+f);


//Variables defined with let cannot be Redeclared 
    let g = 20;
    let g = 30;

//Variables defined with let must be Declared before use
    console.log(h+i);
    let h = 20;
    let i = 30;

//Variables defined with let have Block Scope */

{
    let k = 10;
    console.log(k);

}
    console.log(k); // give error you can not access 


//4. using const 
    const name = "saheb";

//Variables defined with const cannot be Redeclared
    const nam = "ali"
    const nam = "khan"; // given error

//Variables defined with const cannot be Reassigned
    const myage = 10;
    myage = 30; //eror
    
   // Variables defined with const have Block Scope
   {
    let k = 10;
    console.log(k);

}
    console.log(k); // give error you can not access 
