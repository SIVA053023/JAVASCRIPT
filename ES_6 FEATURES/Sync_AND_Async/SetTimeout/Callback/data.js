let employees=[{id:101,name:"Rahul",sal:45000},
    {id:102,name:"Sonia",sal:78465}
]


let Createemployee= (emp, Callback)=>{
     setTimeout(()=>{
          employees.push(emp)
          Callback();
     },4000)
}
let getemployees=()=>{
    setTimeout(()=>{
        let rows=""
        for( emp of employees){
            rows=rows+`<tr>
                         <td>${emp.id}</td>
                         <td>${emp.name}</td>
                         <td>${emp.sal}</td>
                      </tr> `
        }
        document.getElementById('abc').innerHTML=rows
    },1000)

     
}

Createemployee({id:103,name:"Priyanka",sal:56000},getemployees);

