
// JavaScript Document


function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj, false)[name];
	}
}

/*--------------------------------------------------------
功能：    多个属性值同时变化，可以变高，可以变低
输入：    obj:要运动的对象
        property:属性名，比如'height'
        iTarget：运动结束之后的属性值，比如1000。如果是透明度，100代表全透明。
        endFunc(可选):运动结束之后执行的函数
输出：    无
备注：  如果是多物体，那么每个物体都要添加一个全局的timer(定时器)属性
--------------------------------------------------------*/
function startmove(obj,json,fnEnd)
	{
	  // alert(fnEnd);
	  clearInterval(obj.timer);
	    obj.timer=setInterval(function(){
		var bStop=true;
		for(var attr in json)
		{
		 var cur=0;
		 if(attr=='opacity')
		 {
			 cur=Math.round(parseFloat(getStyle(obj,attr))*100);
		 }
		 else
		 {
		    cur=parseInt(getStyle(obj,attr)); 
		 }
	   var speed=(json[attr]-cur)/6;
		 speed=speed>0?Math.ceil(speed):Math.floor(speed);
		 if(cur!=json[attr])
		  bStop=false;
		 if(attr=='opacity')
		 {
		    obj.style.opacity=(cur+speed)/100;
		    obj.style.filter='alpha(opacity:'+(cur+speed)+')';
		 }
		 else
		 {
			 obj.style[attr]=cur+speed+'px';
		 }
		}
		if(bStop)
		{
			clearInterval(obj.timer);
			if(fnEnd)fnEnd();
		}
		},30);
	}