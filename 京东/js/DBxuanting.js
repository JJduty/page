//顶部悬停
window.onscroll=function() {
    //获取滚动条的位置
    var scrollTop=parseInt(document.documentElement.scrollTop || document.body.scrollTop);
    var oHide_top=document.getElementById('hide_top');
    if(scrollTop>document.getElementById('jd_miaosha').offsetTop){
        oHide_top.style.display='block';
    }

    if(scrollTop>document.getElementById('enjoy').offsetTop){
        oHide_xuanfu.style.display='block';
    }
}