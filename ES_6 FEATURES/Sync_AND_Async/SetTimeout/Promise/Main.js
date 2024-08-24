let employees=[{id:101,name:"Rahul",sal:45000},
    {id:102,name:"Sonia",sal:78465}
]

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
        document.getElementById('One').innerHTML=rows
    },1000)

     
}


let Createemployee= (emp)=>{
  
return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let db_flag=true
            db_flag=true ? resolve("data inserted"):reject("Failed")
            employees.push(emp)
        }, 4000); 
       
})
     
}

Createemployee({id:103,name:"Priyanka",sal:56000}).then((msg)=>{
    console.log(msg)
    getemployees()
   }).catch((err)=>{
       console.log(err)
       getemployees()
   })


