function changeimageSize(imagesrc,width,height){
    let image=document.getElementById('Siva')
    console.log(image);
    image.src=imagesrc;
    image.style.width=width;
    image.style.height=height;

}
function HM(){
    changeimageSize('./HM.webp','500px','500px') // here we are reusing the changeimageSize and invoking the data
}
function DE(){
    changeimageSize('./DSE.jpg','200px','200px') // here we are reusing the changeimageSize and invoking the data
}
