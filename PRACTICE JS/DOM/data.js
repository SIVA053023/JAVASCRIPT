let employees=[{id:101,ename:"Shiva",sal:45000},
    {id:102,ename:"Krishna",sal:55000},
    {id:103,ename:"vamsi",sal:65000},
    {id:104,ename:"Bhavani",sal:65000},
    {id:105,ename:"kumar",sal:65000}
    
]
function displaydata(){
    let rows="";    
    for(emp of employees){
        rows=rows+`<tr>
        <td>${emp.id}</td>
        <td>${emp.ename}</td>
        <td>${emp.sal}</td>
        </tr>`
    }
    document.getElementsByTagName('tbody')[0].innerHTML=rows
}
