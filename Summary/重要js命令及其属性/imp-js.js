
window.onload = function() {

/************************		一、JS简单的基础知识		************************/

	oHoure.style.WebkitTransform="rotate("+ (nowHoure * 30+houreDeg) + "deg)";		//字符串的使用都需要加“''”，而变量则不需要！！！

	undefined		//未定义类型（undefined）：未定义类型的数据表示的是该变量没有进行初始化操作

	%		//（取模，求余），一般用“i%2 == 0”判断奇偶数

	var a = b = c = 99;		//此时，程序先将99赋值给（未声明自动提升）全局变量c，再将c的存储地址给（同样未声明自动提升）全局变量b，最后再将b的存储地址给声明变量a

	5>3?return 1:return 0;		//先判断5是否大于3，是返回1，否则返回0；此例结果为1（ps：一旦我们在函数中写了return语句，那么return语句后面的代码将不会再执行）
	
	break;		//表示直接退出当前结构（多为switch和for循环语句）

	continue;		//表示退出当次循环，进入下一次循环

	//事件流中，默认为事件冒泡，即先执行最具体的元素的事件，然后再向上逐级传播。

	//JS中，对象的层次关系：（最高级：浏览器对象）
	browser{window[frame,document(Document,Element,Attribute,Event),location,history],screen,navigator}

/************************		二、JS可直接调用的属性		************************/
//BOM对象的属性（全局变量和document均可当作window对象的属性）
	window.innerWidth;		//window对象的内部宽度,包括滚动条的宽度（随缩放窗口变化）
	window.innerHeight;		//window对象的内部高度，即浏览器中除去顶部浏览器自身的导航栏和可能底部检查框的高度后剩余显示内容的高度（随缩放窗口变化）
	window.location.hostname;		//返回web主机的域名
	window.location.pathname;		//返回当前页面的路径和文件名
	window.location.port;		//返回web主机的端口
	window.location.protocal;		//返回web所使用的协议（如http://或https://）
	window.location.href;		//返回当前页面的URL
	
	//疑点：screen是不是window的子对象？？！
	screen.availWidth;		//可用屏幕的宽度，一台电脑固定一个值（不随窗口变化）
	screen.availHeight;		//可用屏幕的高度，即显示屏中除去桌面的任务栏的高度后剩余的高度，一台电脑固定一个值（不随窗口变化）
	screen.width;		//屏幕的宽度，一台电脑固定一个值（不随窗口变化）
	screen.height;		//屏幕的高度，一台电脑固定一个值（不随窗口变化）


//DOM对象的属性（可为DOM对象的节点）
	document.*.innerHTML		//改变HTML内容
	document.*.value		//获取HTML元素的输入文本内容
	document.*.src		//改变HTML元素路径
	document.*.style.property = propertyValue;		//改变HTML元素的css样式（ps：JS中CSS样式的property均采取小驼峰命名，不识别“-”）
	document.*.childNodes;		//访问子节点,形成数组（ps：1、子节点不包含孙节点及以后；2、空格也当作子节点，所以按规范代码写法，[0]为空格，[1]才为子元素；3、不换行连写html代码，那么[0]为子元素）
	document.*.parentNode;		//访问父节点（ps：唯一）
	document.*.offsetHeight;		//*元素可见范围的不包含滚动条的高度
	document.*.scrollHeight;		//*元素可见范围的包含滚动条的高度
	document.documentElement.clientHeight;		//当前客户端浏览器的页面高度，即浏览器中除去顶部浏览器自身的导航栏和可能底部检查框的高度后剩余显示内容的高度（随缩放窗口变化）
	document.documentElement.clientWidth;		//当前客户端浏览器的页面宽度，不包括滚动条的宽度（随缩放窗口变化）
	document.documentElement.scrollTop;		//滚动条可见的顶部与整个页面最顶部的距离（ps：滚动条相当于当前页面的缩影）
	document.*.offsetTop;		//*元素可见范围的顶部与整个页面最顶部的距离


//数组对象的属性
	arr[i].index = i;		//用于把每次循环加上序列，并可以在当次循环中调用其序列值，达到获取该数组元素的下标 ——— 调用“this.index”


//事件对象的属性
	event.type		//获取事件的类型
	event.target		//获取事件的目标


//字符串对象
	string.length		//获取字符串的长度
	string.prototype		//允许您向对象添加属性和方法
	string.constructor		//对创建该对象的函数的引用
	



/************************		三、JS可直接调用的函数方法		************************/
/*1、带参的方法*/
	setInterval(函数名,毫秒数);		//设置定时器
	clearInterval(函数名);		//清除定时器
	setTimeout(函数名,毫秒数);		//暂停指定的毫秒数之后执行指定的代码，只执行一次（即延时执行）
	clearTimeout(函数名);		//清除暂停

//Math对象的带参方法
	parseInt(*)	;	//强制转换成整型数值
	parseFloat(*);		//强制转换成浮点数值
	Math.floor(*);		//舍去小数位，转换成整型数值
	Math.round)(*)		//四舍五入，转换成整型数值
	Math.max(num1,num2,...,numN);		//返回最大值
	Math.min(num1,num2,...,numN);		//返回最小值
	Math.abs(num);		//返回绝对值
	Math.min.apply(null,arr);		////返回指定数组中的一个最小值
	
	
//DOM对象的带参方法（即调用方法时，“.”前必须为“document”！！！）
	document.getElementsByClassName('*')[**]	;		//获取*类名元素
	document.getElementsByTagName('*')[**];		//获取*标签名元素
	document.getElementById('*');		//获取*id名元素

	document.createElement('*');		//创建*名标签元素
	document.createTextNode('*');		//创建文本节点，文本内容为*
	document.body.appendChild(oDiv);		//层级关系：document > body > div > 其他
	document.*.appendChild(**);		//插入子类（或内容）（ps：创建元素后往往需要此方法插入父类）

	//文档输出,填入的html标签会自动转换成html元素（ps：一旦使用，会改写整个html页面已有内容）
	document.write('<p>this is my first Javascript Program!</p>');
	
	document.*.addEventListener('事件名',函数名);		//添加侦听事件，并调用函数方法（ps：事件名前不加“on”，函数名后不加“()”）
	document.*.removeEventListener('事件名',函数名);		//移除侦听事件，其他的内容与addEventListener()方法一致
	document.*.getAttribute('**');		//获取对象的**属性
	document.*.setAttribute('**','***');		//设置对象的**属性的值改为***
	document.*.style.cssText = 'border-radius:30%;width:100px;height:100px;';		//组合改写属性
	document.*.insertBefore(newVar,Var);		//在某个元素的前面插入一个新节点，在这个方法中，包含了两个参数，第一个参数是要插入的节点，第二个参数是参考节点，也就是所谓的在哪个节点前插入（ps：此两节点属同层节点）
	document.*.removeChild(*.childNodes[1]);		//移除*的第二个子节点，结合childNodes属性理解



//BOM对象的带参方法（即调用方法时，“.”前必须为“window”！！！）	
	//打开窗口,该方法有三个参数，第一个参数是我们需要打开的页面，第二个参数是打开页面的名字，第三个参数是打开页面的一些相关的设置
	//*可以为html（相对地址），也可以为网址（绝对地址）；'_blank'为新窗口打开；'_self'为当前窗口打开
	window.open('*','_blank','width=200,height=200');
	window.history.go(num);		//进入历史中的相对当前的某个页面，正进负退
	window.location.assign('http://www.*.com');		//加载新的页面

//字符串对象的带参方法
	string.indexOf(*);		//判断某个字符串在原字符串中（首次出现）的起始位置（ps：参数不用加引号），不存在的字符串则返回-1
	string.match('*');		//存在我们匹配的字符串，那么返回的结果将为匹配的字符串（ps：参数需要加引号）
	string.replace('*','**');		//内容替换，将原有的‘*’，替换成先插入的‘**’
	string.split('*');		//将字符串转换为数组,参数是字符串中(作为分割)的字符*
	string.charAt(index);		//返回在指定位置的字符
	string.charCodeAt(index);		//返回在指定的位置的字符的 Unicode 编码
	string.concat('stringX','stringX',...,'stringX');		//连接字符串
	string.fromCharCode('numX','numX',...,'numX');		//从字符编码创建一个字符串
	string.indexOf('searchvalue','fromindex');		//检索字符串
	string.lastIndexOf('searchvalue','fromindex');		//从后向前搜索字符串
	string.search('regexp');		//检索与正则表达式相匹配的值
	string.slice(startnum,endnum);		//提取字符串的片断，并在新的字符串中返回被提取的部分
	string.substring(startnum,endnum);		//提取字符串中两个指定的索引号之间的字符
	string.substr(startnum,length);		//从起始索引号提取字符串中指定数目的字符


//日期对象的带参方法
	date.setFullYear('年','月','日')；		//设置具体的日期；该方法包含三个参数，分别是年、月、日


//数组的带参方法
	arr1.concat(arr2).concat(arr3);		//合并三个数组
	arr.push('*');		//末尾添加数组元素
	arr.sort(num);		//数组数值升降序排列，正升负降


/*2、不带参的方法*/
	*.onclick();		//点击事件
	*.onmouseover();		//鼠标停留事件
	*.onmouseout();		//鼠标离开事件（包含指定元素及其子元素）
	*.onmouseleave();		//鼠标离开事件（只含指定元素）
	*.onmouseenter();		//鼠标穿过事件（不仅要停留，而且还要离开）
	*.onchange();		//文本内容改变事件
	*.onselect();		//文本框选中事件
	*.onfocus();		//聚焦事件
	*.onblur();		//失去焦点事件
	*.onunload();		//关闭网页事件
	*.onkeydown();		//键盘按下事件
	*.onkeyup();		//键盘松开事件
	*.ondblclick();		//鼠标双击事件


//Math对象的不带参方法
	Math.random()		//获取[0,1)的随机数；若想获取A~B区间的随机数（A<B），则“Math.floor(Math.random()*(B-A+1)+A);”可得


//事件对象的不带参方法
	event.stopPropagation();		//阻止事件冒泡
	event.preventDefault();		//阻止事件默认行为


//字符串对象的不带参方法
	string.toUpperCase();		//字符串的大小写转换，均转换成大写
	string.toLowerCase();		//字符串的大小写转换，均转换成小写
	string.valueOf();		//返回某个字符串对象的原始值


//日期对象的不带参方法
	var date = new Date();		//获得当天的日期
	date.getFullYear()；		//获取年份；（以四位数的年份来表示）
	date.getYear()；		//返回 Date 对象的年份字段（如2017年的为“117”）
	date.getTime()；		//获取毫秒；时间戳（以1970年1月1日0时0分0秒开始）
	date.getMonth();		//获取当前月份数减1的值（ps：要减一，视情况逢月尾还要进数）
	date..getDate()；		//获取当前日期号数
	date.getDay();		//获取星期；0~6，其中，0表示星期天，1~6分别表示星期一到星期六
	date.getHours();          //获取当前的小时数
	date.getMinutes();      //获取当前的分钟数
	date.getSeconds();      //获取当前的秒数
	date.toLocaleTimeString();		//获取当前时间（时数：分数：秒数）


//数组的不带参方法
	arr.reverse();		//数组元素翻转


//BOM对象的不带参方法
	window.close();		//关闭当前窗口
	window.history.back();		//后退到上一个页面（ps：前提是当前窗口有曾打开多个网页的历史记录）
	window.history.forward();		//前进到下一个页面（ps：前提是当前窗口有曾打开下一个网页的历史记录）
	


/************************		四、JS常用例子		***********************/
/*1、抛出异常*/
	//当输入文本框为空按提交按钮时，异常抛出为“用户输入为空的异常情况”，这是人为控制的
	function exa(){
			var e = document.getElementById('txt').value;
			try{
				if(e==''){
					throw '用户输入为空的异常情况';     //throw抛出
				};
			}catch(err){
				alert(err);
			};
		};	
	exa();









}