let employees=[{id:101,name:"Siva",sal:45000},
    {id:102,name:"Krishna",sal:55000},
]
let createEmployee=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag=true;
            flag? resolve():reject();
            employees.push(emp)
        },4000)
    })
}
let displayData=()=>{
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
    createEmployee({id:103,name:"Priyanka",sal:65000})
    .then((msg)=>{
        console.log(msg)
        displayData()
    })
    
    .catch((err)=>{console.log(err)})
    
 