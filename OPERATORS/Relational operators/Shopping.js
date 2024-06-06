let productsizes=["L","M","X"]
let prices=[499,399,599]

/*for(price of prices ){      // this syntax used for to print the all the values of a property
    console.log(price);
}*/
          // CASE-1   we get out put "NOT AVAILABLE" Because both logics are true

if(productsizes=="L","M","X" && prices==499,399,599){ 
    console.log("NOT AVAILABLE");                 
}
else{
    console.log("PRODUCTS ARE AVAILABLE");
}
      // CASE-2 we get the output "PRODUCTS ARE AVAILABLE" Because the logics are false

      if(productsizes=="L" && prices==499){ 
        console.log("NOT AVAILABLE");                 
    }
    else{
        console.log("PRODUCTS ARE AVAILABLE");
    }

