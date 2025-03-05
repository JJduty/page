
function  _fresh(){
//1.获取当前时间
    var nowtime = new Date();
//2.确定结束时间  2022年12月1日 20:00
    var endtime = new Date("12/15/2022 21:53:23");
//3.作差 结束时间-当前时间
    var leftsecond = parseInt((endtime - nowtime)/1000);
    if(leftsecond < 0 ){
        leftsecond = 0;
    }
    var _h = parseInt((leftsecond/3600));
    var _m = parseInt((leftsecond/60)%60);
    var _s = parseInt((leftsecond%60));
    if(_h < 10){
        _h = "0" + _h;
    }
    if(_m < 10){
        _m = "0" + _m;
    }
    if(_s < 10){
        _s = "0" + _s;
    }
    document.getElementById("jd_span_h").innerHTML = _h;
    document.getElementById("jd_span_m").innerHTML = _m;
    document.getElementById("jd_span_s").innerHTML = _s;
}
_fresh();
setInterval(_fresh,1000);
