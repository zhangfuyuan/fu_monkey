

window.onload = function() {
	var oItem = document.getElementsByClassName('item');
	var oBtn = document.getElementById('btn');
	
	var oBox = [];
	var arr = [];

	for(var k=0; k<9; k++){
		arr[k] = k;		//产生0~8的升序数组
		oBox[k] = oItem[k].parentNode;		//定义固定的父类
	}
			
	oBtn.onclick = function(){
		
		arr.sort(function(){ return 0.5 - Math.random(); });		//0~8的数组顺序打乱，用于形成不重复的随机数
		
		for(var i=0; i<9; i++){	
			oItem[arr[i]].style.cssText = 'position:absolute;left:' + oBox[i].offsetLeft + 'px;top:' + oBox[i].offsetTop + 'px;';	
		}
	}

}
		//以上代码已经实现图片的重新排序效果

		//然后用css3代码实现图片重排的位移动画效果