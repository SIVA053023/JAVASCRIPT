let yes=document.getElementById('yes')
const target=document.getElementById('target')


yes.addEventListener('click',()=>{
    alert("Aww...,Love you too.....!!")
})

function one(){
       const maxWidth=400;
       const maxHeight=400;
       const ratargetX=Math.floor(Math.random()*maxWidth)
       const ratargetY=Math.floor(Math.random()*maxHeight)
       target.style.right=ratargetX+ 'px';
       target.style.top=ratargetY +'px'
}
target.addEventListener('mouseenter',function(){
    one();
})