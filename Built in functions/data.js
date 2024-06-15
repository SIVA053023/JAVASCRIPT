/*let dt=new Date()
let ct=dt.toLocaleTimeString()
document.getElementsByTagName('p')[0].innerHTML =ct*/
//document.getElementsByTagName('p')[0].innerHTML ="Good Morning"
setInterval(()=>{

    document.getElementsByTagName('p')[0].innerHTML=new Date().toLocaleTimeString()

},1000)

