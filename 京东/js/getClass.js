// JavaScript Document
//使用原生js时，通过class名称就可以得到相应的class名称标签组封装的函数
//定义一个函数getClass(oParent,aClass);
function getClass(oParent,sClass)//oParent为要获取的className的父级元素对象
{
	//定义一个空数组，因为获取的元素可能有多个，所以用数组存放
	var aResult=[];
	//定义一个变量通过通配符获取所有标签
	var aEle=oParent.getElementsByTagName('*');
	for(var i=0;i<aEle.length;i++)
	{
		if(aEle[i].className==sClass)  //判断获取到的元素的参数的class就是元素的className
		{
			aResult.push(aEle[i]);  //若是，则放进数组中
		}
	
	}
	return aResult;
}