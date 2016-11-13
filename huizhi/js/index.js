/**
 * Created by 任 on 2016/11/7.
 */
$(function () {
    $(".link_footer").load("footer.html");
    var left_but=document.getElementsByClassName("left_but")[0];
    var right_but=document.getElementsByClassName("right_but")[0];
    var ul=document.getElementsByTagName("ul")[0];
    var li=document.getElementsByTagName("li");
    ul.innerHTML=ul.innerHTML+ul.innerHTML;
    var speed=2;
    var ll=0;
    left_but.onclick=function(){
        speed=2;
    }
    right_but.onclick=function(){
        speed=-2;
    }
    ul.style.width=(li[0].offsetWidth+5)*li.length+"px";
    console.log(ul.offsetWidth);
    move=function(){
        ul.style.left=ul.offsetLeft-speed+"px"
        if(ul.offsetLeft<=-ul.offsetWidth/2){
            ul.style.left="0px";
        }
        if(ul.offsetLeft>0){
            ul.style.left=-(ul.offsetWidth/2)+"px";
        }

    }
      ll=setInterval(move,20)
       ul.onmouseover=function(){
             clearInterval(ll);
       }
       ul.onmouseout=function(){
             ll=setInterval(move,20);
       }
})
