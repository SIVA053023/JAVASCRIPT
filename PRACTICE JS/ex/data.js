let users=[{id:101,ename:"Siva",sal:45000},
    {id:102,ename:"Krishna",sal:55000},
    {id:103,ename:"Vamsi",sal:75000},
    {id:104,ename:"jagadesh",sal:85000},
]


let siva=()=>{
     let rows=""
    for(user of users){
       
        rows=rows+`<tr>
        <td>${user.id}</td>
        <td>${user.ename}</td>
        <td>${user.sal}</td>
        
        </tr>`
        
    }
    document.getElementsByTagName('tbody')[0].innerHTML=rows
  
}