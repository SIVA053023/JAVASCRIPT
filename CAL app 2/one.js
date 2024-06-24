let input=document.getElementById('inputbox')
let buttons=document.getElementsByTagName('button')
let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(input.taget.e=='='){
            string=eval(string);
            input.value=string;
        }
        else if(input.target.e=='AC'){
            string="";
            input.value=string;
        }
    })
})