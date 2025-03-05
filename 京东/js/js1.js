//图片移除
var oDiv_logo=document.getElementById("logo");
var oImg_close=getClass(oDiv_logo,'close')[0];
oImg_close.onclick=function(){
    startmove(oDiv_logo,{opacity:0},function(){
        oDiv_logo.style.height=0;
    });
}
//图片抖动效果
var oJd_time=document.getElementById("jd_time");
var oJd_img=getClass(oJd_time,"move");

//遍历
for(var i=0;i<oJd_img.length;i++){
    oJd_img[i].index=i;
    oJd_img[i].onmousseover=function(){
        startmove(oJd_img[this.index],{top:4})
    }
    oJd_img[i].onmouseout=function(){
        startmove(oJd_img[this.index],{top:10})
    }
}