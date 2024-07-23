let employees=[{id:101,name:"Rahul",sal:46000},
    {id:102,name:"Sonia",sal:54000},
]
let Create_employee=(emp)=>{
      return new Promise((resolve,reject)=>{
              setTimeout(()=>{
                 let flag=true
                 flag? resolve("Data inserted"):reject("Failed")
                 employees.push(emp)
            },4000)
      })
}