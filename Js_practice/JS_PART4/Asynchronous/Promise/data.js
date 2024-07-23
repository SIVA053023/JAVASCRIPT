let employees=[{id:101,name:"Rahul",sal:46000},
    {id:102,name:"Sonia",sal:54000},
]
let createEmployee=(emp)=>{
      return new Promise((resolve,reject)=>{
               setTimeout(()=>{
                  let flag=true
                  flag?resolve("data inserted"):reject("failed")
                  employees.push(emp)
               },4000)
      })
}

let displaydata=()=>{
      setTimeout(()=>{
            let rows=""
            for(user of employees){
                  rows=rows+`<tr>
                  <td>${user.id}</td>
                  <td>${user.name}</td>
                  <td>${user.sal}</td>
                  </tr>`
            }
            document.getElementById('abc').innerHTML=rows
      },2000)
}
createEmployee({id:103,name:"mango",sal:78945})
.then((msg)=>{
      console.log(msg)
      displaydata()
})
.catch((err)=>{
 console.log(err)
})