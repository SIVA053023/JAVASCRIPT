let employees=[{id:101,name:"Shiva",sal:48200},
               {id:102,name:"Krishna",sal:58000},
               {id:103,name:"Pavan",sal:65000},
               {id:104,name:"Virat",sal:32000}
]

let displaydata=()=>{
     let rows=''
    for(emp of employees){
       
        rows=rows+`<tr>
                 <td>${emp.id}</td>
                 <td>${emp.name}</td>
                 <td>${emp.sal}</td>
                 </tr>`
        
        
    }
    document.getElementsByTagName('tbody')[0].innerHTML=rows
}