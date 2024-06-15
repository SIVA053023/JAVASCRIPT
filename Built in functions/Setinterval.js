/*setInterval SYNTAX=  setInterval(function, time in ms) function will normal or fat arrow function
   setinterval(()=>{}, 4000)   which execute the function for every setinterval time */
setInterval(()=>{
     document.getElementsByTagName('p')[0].innerHTML=new Date().toLocaleTimeString();
},2000)