let employees=[{'id':101,ename:"Shiva",sal:45000},
    {'id':102,ename:"krishna",sal:55000},
    {'id':103,ename:"Rahul",sal:65000},
]


function display(){
    let rows=""
    for(employee of employees){
        let rows=rows+`<tr>
        <td>${employee.id}</td>
        <td>${employee.ename}</td>
        <td>${employee.sal}</td>
        
        </tr>`
        
    }
    document.getElementsByTagName('tbody')[0].innerHTML=rows;
}