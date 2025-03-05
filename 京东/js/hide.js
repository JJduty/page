
// 隐藏菜单
var aHide_div = getClass(oNull,'hide_info_left');
var aHide_li = getClass(oNull,'hide_left');

for(var i=0;i<aHide_li.length;i++){
    aHide_li[i].index=i;
    aHide_li[i].onmouseover=function() {
        aHide_li[this.index].style.background='#eee';
        aHide_div[this.index].style.display='block';
    }
    aHide_li[i].onmouseout=function() {
        aHide_li[this.index].style.background='#6E6568';
        aHide_div[this.index].style.display='none';
    }
}