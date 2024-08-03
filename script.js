let show=document.getElementById("show");
let ul=document.getElementById("container");
show.addEventListener("click",()=>{
    ul.classList.toggle("showList");
    if(ul.className=="showList"){
        show.innerHTML='<img src="image/crossVector.png" alt="">'
    }
    else{
        show.innerHTML=' <img src="image/menu_icon.png" alt="">';
    }
})

