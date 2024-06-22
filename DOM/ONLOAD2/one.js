let users=[{"id":1,"name":"Adriana","email":"abenardeau0@narod.ru","gender":"Female"},
    {"id":2,"name":"Warner","email":"wmacnelly1@ihg.com","gender":"Male"},
    {"id":3,"name":"Juliann","email":"jsansome2@rakuten.co.jp","gender":"Female"},
    {"id":4,"name":"Buck","email":"bbuckerfield3@de.vu","gender":"Male"},
    {"id":5,"name":"Hieronymus","email":"hmincini4@vimeo.com","gender":"Male"},
    {"id":6,"name":"Corinne","email":"choutby5@statcounter.com","gender":"Female"},
    {"id":7,"name":"Shell","email":"solliffe6@guardian.co.uk","gender":"Female"},
    {"id":8,"name":"Antonin","email":"alawler7@ibm.com","gender":"Male"},
    {"id":9,"name":"Hobey","email":"hfludder8@blogspot.com","gender":"Male"},
    {"id":10,"name":"Pennie","email":"pmichell9@canalblog.com","gender":"Female"},
    {"id":11,"name":"Jase","email":"jbridgena@google.nl","gender":"Male"},
    {"id":12,"name":"Fanny","email":"foldridgeb@cbslocal.com","gender":"Female"},
    {"id":13,"name":"Dulcy","email":"ddudhillc@kickstarter.com","gender":"Female"},
    {"id":14,"name":"Candie","email":"cgebhardd@mail.ru","gender":"Female"},
    {"id":15,"name":"Garey","email":"gbodiame@naver.com","gender":"Male"},
    {"id":16,"name":"Briney","email":"briccettif@slashdot.org","gender":"Female"},
    {"id":17,"name":"Ericka","email":"emclayg@vinaora.com","gender":"Bigender"},
    {"id":18,"name":"Erny","email":"ekareth@php.net","gender":"Male"},
    {"id":19,"name":"Helsa","email":"hmajori@feedburner.com","gender":"Female"},
    {"id":20,"name":"Baryram","email":"bswattenj@cocolog-nifty.com","gender":"Male"},
    {"id":21,"name":"Tommy","email":"tblaxallk@forbes.com","gender":"Male"},
    {"id":22,"name":"Bernelle","email":"bkeatesl@sciencedaily.com","gender":"Female"},
    {"id":23,"name":"Talya","email":"thalpenm@yandex.ru","gender":"Female"},
    {"id":24,"name":"Alla","email":"ajellisn@friendfeed.com","gender":"Female"},
    {"id":25,"name":"Ferguson","email":"fmelbourno@live.com","gender":"Male"},
    {"id":26,"name":"Nettle","email":"ndutnallp@so-net.ne.jp","gender":"Female"},
    {"id":27,"name":"Ari","email":"ascrangeq@comsenz.com","gender":"Agender"},
    {"id":28,"name":"Gloriane","email":"ggrindlayr@163.com","gender":"Female"},
    {"id":29,"name":"Denyse","email":"ddraiseys@answers.com","gender":"Genderqueer"},
    {"id":30,"name":"West","email":"wcalleryt@usgs.gov","gender":"Male"}
]

let one=()=>{
    let rows=""
for(user of users){
    if(user.gender==="Female"){
        rows=rows+`<tr>
                   <td>${user.id}</td>
                   <td>${user.name}</td>
                   <td>${user.email}</td>
                   <td>${user.gender}</td>
                   </tr>`
    }
    document.getElementsByTagName('tbody')[0].innerHTML=rows

    
}
}