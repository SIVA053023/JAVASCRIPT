let a=[200,300,450,550,650,890];
a.pop();                  // by using pop mostly  we can use to delete the last element of an array
delete a[3];           // by using the indexing  we can delete the desired  'one'element only,  
console.log(a);       // output=[ 200, 300, 450, <1 empty item>, 650 ]

// if we want to delete multiple or replace multiple elements we go with the 'SPLICE'