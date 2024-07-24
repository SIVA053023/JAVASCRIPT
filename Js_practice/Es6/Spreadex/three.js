let eids=[10,102,103,104,105,106]
let new_Eids=[]
for(let i=0;i<=eids.length-1;i++){
     new_Eids.push(eids[i])
}
console.log(new_Eids)


// BY WHILE LOOP
let one=[]
let i=0
while(i<=eids.length-1){
    one.push(eids[i])
    i++
}
console.log(one)

// BY DO WHILE LOOP
let a=0
let two=[]
do{
     two.push(eids[a]);
     a++
}while(a<=eids.length-1)
    console.log(two)
    