const one=document.getElementsByTagName('img')[0];

one.addEventListener('mouseover',function(){
    one.src='./An.jpg'
    one.style.width='500px'
    one.style.height='500px'
} );
one.addEventListener('mouseout',function(){
    one.src='./virat.webp'
    one.style.width='600px'
    one.style.height='600px'
})
