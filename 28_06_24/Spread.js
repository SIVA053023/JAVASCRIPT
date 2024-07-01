let eids=[101,102,103,104]

for (eid of eids){            // for of
    console.log(eid);

}
// create new array based on existing array
let eids1=eids;   // alias name
eids[0]=11;
console.log(eids);
console.log(eids1);
//creating new array but its lengthy process
/*let new_Eids=[];
new_Eids[0]=eids[0];
new_Eids[1]=eids[1];
new_Eids[2]=eids[2];
new_Eids[3]=eids[3];
console.log(new_Eids); */
  // creating new array by for loop

let new_Eids=[];
for(i=0;i<=eids.length1;i++){
    new_Eids.push(eids[i]);
}
console.log(new_Eids)

// by for of loop
for(eid of eids){
    new_Eids.push(eid);

}
console.log(new_Eids)

// by map loop
let new_Eid=eids.map((eid)=>{
    return eid;

})
console.log(new_Eid);
