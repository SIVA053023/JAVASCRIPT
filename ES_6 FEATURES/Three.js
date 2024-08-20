let enames=["rahul","sonia","priyanka"]

// for each
let new_enames=enames.forEach((ename)=>{           // if you only want to just iterate the Array go with the forEach();
    return ename;
})
console.log(new_enames)                          // ouput=undefined

// Map method
let map=enames.map((ename)=>{
    return ename.toLocaleUpperCase();
})
console.log(map)                                // output=[ 'RAHUL', 'SONIA', 'PRIYANKA' ]

//map method                                       if you want to iterate and create a new array go with the map();
let eids=[101,102,103,104]
let new_eids=eids.map((eid)=>{
    return eid
})
console.log(new_eids)                          // output=[ 101, 102, 103, 104 ]