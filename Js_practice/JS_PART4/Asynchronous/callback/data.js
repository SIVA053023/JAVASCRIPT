let employees=[{id:101,name:"Shiva",sal:152000},
    {id:102,name:"krishna",sal:785242}
]
let createEmployee=(emp,callback)=>{
   setTimeout(()=>{
    employees.push(emp)
    callback();
   },4000)
}

let displaydata=()=>{
    setTimeout(()=>{
        let rows=""
        for(emp of employees){
            rows=rows+`<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.sal}</td>
            
            </tr>`
        }
        document.getElementsByTagName('tbody')[0].innerHTML=rows
    },2000)
}
createEmployee({id:103,name:"niune",sal:61894},displaydata)


