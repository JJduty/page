
//轮播图设计
// 1.prev和next鼠标放在图片时出现;放在自身上，调整透明度；鼠标离开图片，消失。
var oNull = document.getElementById("null_content");
var oCondiv = getClass(oNull,"content_middle_top")[0];
var oPrev = getClass(oNull,"prev")[0];
var oNext = getClass(oNull,"next")[0];


oCondiv.onmouseover = function() {
    oPrev.style.display = "block";
    oNext.style.display = "block";
    //取消setInterval()方法设置的定时器。此方法的参数必须是取消相应的setInterval方法的返回值
    clearInterval(timer); //清除
};

oCondiv.onmouseout = function() {
    oPrev.style.display = "none";
    oNext.style.display = "none";
    //按照指定的周期（以毫秒计）来调用函数或计算表达式。
    timer=setInterval(oNext.onclick,2000);
};

oPrev.onmouseover = oNext.onmouseover = function() {
    startmove(oPrev,{opacity:80});
    startmove(oNext,{opacity:80});
}
oPrev.onmouseout = oNext.onmouseout = function() {
    startmove(oPrev,{opacity:50});
    startmove(oNext,{opacity:50});
}


var aShow_btn = getClass(oNull,'show_img');
var aPic = getClass(oNull,'pic_info');
var now=0;
var nowZindex=2;
for(vari= 0;i<aShow_btn.length;i++){
    aShow_btn[i].index=i;
    aShow_btn[i].onmouseover=function() {
        if(this.index==now) return;
        now=this.index;
        tab();
    }
}
function tab(){
    for(var i=0;i<aShow_btn.length;i++){
        aShow_btn[i].style.background="#ffffff";
    }
    aPic[now].style.zIndex=nowZindex++;
    // aPic[now].style.width;
    aShow_btn[now].style.background="red";
}
oPrev.onclick=function() {
    now--;
    if(now==-1){
        now=aPic.length-1;
    }
    tab();
}
oNext.onclick=function() {
    now++;
    if(now==aPic.length){
        now=0;
    }
    tab();
}
var timer = setInterval(oNext.onclick,1500);