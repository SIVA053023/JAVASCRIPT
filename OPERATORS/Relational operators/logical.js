/*       AND        OR
         &&         //
  T.T     T          T
  T.F     F          T
  F.T     F          T
  F.F     F          F  
  
  <, <= and >, >=            (==)equality  it only verifies the content
                             (===)strict equality  it first verifies data type an dthen content
  
  
  */
 // let take a example 

 let a=10;
 let b="10";
 let c=20;
 console.log(a==b) // equality operator here (10=="10") output is  'true' because it only verifies content 

 console.log(a===b)/*strict equality  here it first verifies the data type 'a' is number type AND  'b' is a string type 
                     even though the values are but type is different so output= false only */

 console.log(a==c) // ofcourse the output= false                    