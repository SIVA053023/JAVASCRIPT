let employees=[{id:101,name:"Siva",sal:45000},
    {id:102,name:"Krishna",sal:55000},
]
let createEmployee=(emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp);
        callback();
    },4000)

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
    createEmployee({id:103,name:"rahul",sal:98000}, displayData);


