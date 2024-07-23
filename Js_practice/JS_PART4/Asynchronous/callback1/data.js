let users=[{id:101,name:"Shiva",sal:78965},
    {id:102,name:"Krishna",sal:45612}
]

let createEmployee=(emp,callback)=>{
    setTimeout(()=>{
        users.push(emp)
        callback();
    },2000)
}
let displaydata=()=>{
    setTimeout(()=>{
        let rows=""
        for(user of users){
            rows=rows+`<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.sal}</td>
            </tr>`
        }
        document.getElementById('abc').innerHTML=rows
    },2000)
}
createEmployee({id:103,name:"bifeibf",sal:1984632})
displaydata()