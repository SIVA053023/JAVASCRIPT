let employees=[
               {'id':101,Name:"Sivakrishana",sal:25000},
               {'id':102,Name:"Rahul",sal:75000},
               {'id':103,Name:"Gandhi",sal:55000},
               {'id':104,Name:"Sonia",sal:35000},
               {'id':105,Name:"priyanka",sal:89000},
               
]
function Two(){
       let rows=""
    for (emp of employees){
        // alert("Gm");
     
        rows= rows+`<tr>
                    <td>${emp.id}</td>
                    <td>${emp.Name}</td>
                    <td>${emp.sal}</td>
                   </tr>`



    }
    document.getElementsByTagName('tbody')[0].innerHTML=rows
//document.getElementsByTagName('tbody')[0].innerHTML="Gm"
}

