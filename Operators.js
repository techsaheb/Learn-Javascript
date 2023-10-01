//1.Arithmetic Operators
    /* Operator         Description
          +                 Addition
          -                 Subtraction
          *                  Multiplication
          /                 Division
          **                Exponentiation 
          %                 Modulus 
          ++                Increment
          --                Decrement */

    let a = 50;
    let b = 40;

    console.log(a +" + " + b + " = ", a+b);
    console.log(a +" - " + b + " = ", a-b);
    console.log(a +" * " + b + " = ", a*b);
    console.log(a +" / " + b + " = ", a/b);
    console.log(a +" ** " + b + " = ", a**b);
    console.log(a +" % " + b + " = ", a%b);
    console.log(a+"++", a++, ++a);
    console.log(a+"--", a--, --a);



/*2.Assignment Operators
    Operator	Example             Same As
       =         x = y               x = y	
       +=        x+=y                x = x+y
        -=       X-=y                x = x-y
       *=        x*=y                x = x*y
       /=        x/=y                x = x/y
       **=       x**=y               x = x**y
       %=        x%=y                x = x%y    */

    let x = 10;
    let y = 5;

    console.log( x + " = " + y  , (x=y));
    console.log(x + " +=" + y ,(x+=y));
    console.log(x + " -=" + y ,(x-=y));
    console.log(x + " *=" + y ,(x*=y));
    console.log(x + " /=" + y ,(x/=y));
    console.log(x + " **=" + y ,(x**=y));
    console.log(x + " %=" + y ,(x%=y));


/*3.Comparison Operators
    Operator	        Description
      ==                  equal to
      ===	        equal value and equal type
      !=	               not equal
      !==	        not equal value or not equal type
      >                     greater than
      <                     less than
      >=	            greater than or equal to
      <=                    less than or equal to
      ?	                    ternary operator    */
        let j = 20;
        let k = 30;
        let l = 20;
        

        console.log(j +" == " + l , (j==l));
        console.log(j +" === " + l , (j===l));
        console.log(j +" != " + k , (j==k));
        console.log(j +" !==" + k , (j===k));
        console.log(k +" > " + l, (k>l));
        console.log(k +" >= " + l, (k>=l));
        console.log(j +" <= " + k, (j<=k));


/*4.Logical Operators
        Operator        Description
           &&	         logical and
           ||	         logical or
           !             logical not        */
        let m = 10;
        let n = 20;

        /* && truth table 
         true  && true = true
         true && false = false
         false && true = false
         false && false = false  */

           console.log((m +" < " + n ,(m<n)) && (n + " >" + m ,(n>m)));


           /* || truth table 
           true  || true  = true
           true  || false = true
           false || true  =  true
           false || false  = false */

           console.log((m +" < " + n ,(m<n)) || (n + " >" + m ,(n>m)));


           // !=

           console.log(!m < n)







//5.Ternary Operators
      var ter = 100 > 20  ? " 100 gater than 20 " : " 20 gater than  100";
      console.log(ter);
//6.Type Operators


//7.JavaScript String Comparison



