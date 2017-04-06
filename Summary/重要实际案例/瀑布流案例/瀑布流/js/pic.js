//页面加载，我们用window对象的onload事件，并用一个匿名函数给它赋值；
window.onload = function(){
	imgLocation('container','box');
	
	//在这，我们来定义一个json字符串；
	var imgData = {'data':[{'src':'20.jpg'},{'src':'21.jpg'},{'src':'22.jpg'},{'src':'23.jpg'},{'src':'24.jpg'},{'src':'25.jpg'},{'src':'26.jpg'},{'src':'27.jpg'},{'src':'28.jpg'},{'src':'29.jpg'}]};
	
	
	//下面我们来实现下拉自加载，首先我们要做的是监听我们的滚动条，用的是window对象的onscroll事件；
	window.onscroll = function(){
		//现在我们要来判断，什么时候开始加载新图片
		//我们这样来考虑，当上次最后一张图片加载之后，我们就开始新的加载，所以，这里，我们再定义一个函数
		//通过这个函数来判断什么时候加载新图片，函数命名为checkLastImg()，最后让这个函数返回一个布尔值
		//当值为true的时候，就来加载；
		if(checkLastImg()){
			//接下来，在满足条件的时候，我们就要开始加载图片了，一般情况下，我们加载数据都是从后台服务器读取数据
			//现在，我们没有后台，那么我们就来模拟一个json字符串，让它来加载；所以，在前面我们来定义一个
			//json字符串
			
			//首先，我们来获得父级元素
			var cparent = document.getElementById('container');
			//接下来，我们来通过一个循环结构，来给页面添加子节点，其中，我们通过json的数据个数来作为循环的次数；
			for(var i=0;i<imgData.data.length;i++){
				//先来创建父级元素下的直接子元素div，并给它一个类名叫box
				var ccontent = document.createElement('div');
				ccontent.className = 'box';
				//创建好这个div之后，我们就要将它插入到我们的父级元素中
				cparent.appendChild(ccontent);
				//接下来，我们再来创建box下的子节点
				var imgBox = document.createElement('div');
				imgBox.className = 'imgBox';
				ccontent.appendChild(imgBox);
				//再来创建img
				var img = document.createElement('img');
				//创建好img之后，接下来，我们就要来设置其src属性
				img.src = 'img/' + imgData.data[i].src;
				imgBox.appendChild(img);

			}
			//最后，我们还需要重新调用一下imgLocation()方法，来实现瀑布流布局
			imgLocation('container','box');
		}
	}
}

//首先获取container中有多少张图片，我们可以直接判断container中有多少个直接子div即可
function imgLocation(parent,content){   //两个参数，第一个是父级元素，另外一个就是父级元素下的内容
	//将container中的box全部取出
	var cparent = document.getElementById(parent);
	//此时，我们就可以通过下方的getChildElement()函数，来获取所有的直接子元素div
	var ccontent = getChildElement(parent,content);  //ccontent = document.getElementsByClassName(content);
	//接下来，我们要来固定container的宽度，那么首先，我们就要得到每个box的宽度，以及每行显示的图片的个数
	//而我们每个box的宽度是如何来获得的呢？我们可以通过上面得到的ccontent数组中的某个元素的实际宽度来获取；
	var imgWidth = ccontent[0].offsetWidth;
	//再接下来，我们来确定每行放置图片的个数，用客户端的浏览器的宽度除以每个box的宽度，就可以得到其个数
	//这里，势必会得到一个小数，所以，我们使用Math.floor()方法，来取整；
	var numImg = Math.floor(document.documentElement.clientWidth/imgWidth);
	//接下来，我们就可以来确定container的宽度了，算法就是每个box的宽度乘以每行放置的box的个数；
	cparent.style.cssText = 'width:' + imgWidth*numImg + 'px;margin:0 auto;';
	
	
	
//上面，我们已经实现了固定我们container中图片的个数，并且可以让其水平居中，接下来，我们来处理图片的位置摆放；
	//我们现在要解决的就是，将第二排的图片，首先放置在第一排中高度最小的图片的下方；
	//那么，我们首先就要来获取第一排中，所有图片的高度值；
	//我们首先来定义一个数组，用来保存我们各个box的高度；
	var boxHeightArr = [];
	//然后，我们通过一个for循环来获取图片的高度，并存入数组boxHeightArr;
	for(var i=0;i<ccontent.length;i++){
		//此时，我们要的是获取第一排图片的高度，所以，此时，我们可以给它限定一个条件，就是当循环变量的值<numImg，
		//也就是说，当循环变量小于我们第一排图片的个数时，我们才来获取它的高度；
		if(i<numImg){
			boxHeightArr[i] = ccontent[i].offsetHeight;
			//boxHeightArr.push(ccontent[i].offsetHeight);
//			console.log(boxHeightArr[i]);
		}else{
			//现在，我们在else的情况下，首先来获取第一排图片的最小高度；
			//首先，我们可以通过Math对象的min()方法来获取，但是，min()方法的参数我们应该是数组的所有元素，
			//此时，我们可以这样来写，Math.min.apply(null,boxHeightArr);
			//这样，我们就可以找到数组boxHeightArr中的最小数；
			var minHeight = Math.min.apply(null,boxHeightArr);
//			console.log(minHeight);
			//现在我们已经得到了最小的高度了，那么我们接下来就可以来摆放第二排图片的位置了
			//首先，我们要将这个元素的定位设置为绝对定位
			ccontent[i].style.position = 'absolute';
			//接下来，我们就可以对图片进行竖直方向上的定位了，它在竖直方向上的top值就应该是最小的高度minHeight;
			ccontent[i].style.top = minHeight + 'px';
			//到目前为止，我们已经解决了在竖直方向上的位置问题，接下来，我们还要确定它在水平方向上的位置
			//这就需要我们来确定究竟是第一排图片中的第几张照片的高度是最小的，也就是一个序号的问题；
			//那么我们就来创建一个getMinHeightIndex函数，用来获取它的序号；
			//下面，我们就来定义一个变量用来保存它的序号
			var minIndex = getMinHeightIndex(boxHeightArr,minHeight);
			//接下来，我们就可以来设置图片水平方向上的位置了，我们可以直接使用offsetLeft属性来获取
			//如果直接用offsetLeft属性来写的话，就避免了加上盒子之间的间距的问题；
			ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px';
			//ccontent[i].style.left = ccontent[0].offsetWidth * minIndex + 'px';
			//到现在为止，我们基本上已经实现了图片的定位了，但是，这样写的话，我们会发现，这样，会将剩下的所有
			//的图片都定位到这，所以，当我们定位好第二行的第一张图片之后，我们要重新对第一排最小高度图片的高度进行赋值，
			//否则，所有的图片都将直接放在当前的位置
			boxHeightArr[minIndex] = boxHeightArr[minIndex] + ccontent[i].offsetHeight;
			// boxHeightArr[minIndex] += ccontent[i].offsetHeight;
		}
	}
}

//接下来，我们再来写一个函数，用来获取所有的box元素
function getChildElement(parent,content){
	//在这里，我们知道，要获取的box元素有很多个，所以，我们可以先定义一个数组用来保存这些元素
	var contentArr = [];
	var allContent = document.getElementsByTagName('div');  //我们通过标签名div来匹配所有的div
	//接下来，我们就需要通过一个循环结构，来将所有获得的内容存放到我们定义的contentArr数组中
	for(var i=0;i<allContent.length;i++){
		//这里注意，我们用通配符*获取到的元素就不只是类名为box的div了，还有div中的内容，所以我们就需要进行一个
		//条件判断，用来判断类名为box的元素，只有，当类名相符的元素，我们才用push()方法，将其插入到数组
		//contentArr[]中；
		if(allContent[i].className == content){   
			contentArr.push(allContent[i]);
		}		
	}
	//在这里，我们已经得到了所有的类名为box的div，现在我们要通过一个return语句，来将得到的数组返回给调用的地方；
	return contentArr;
}


//写一个获取最小高度的图片在这一行中的序号
function getMinHeightIndex(boxHeightArr,minHeight){   //这里，我们需要传入两个参数，
													//一个就是高度的数组，另一个就是最小高度
	//此时，我们可以采用对所有的高度值进行遍历的方法来获取
	for(i in boxHeightArr){
		//现在，我们只需要判断，最小高度与对应的高度数组中的某个元素相等，同时，直接返回它所对应的i即可；
		if(boxHeightArr[i] == minHeight){
			return i;
		}
	}
}


//写一个检测最后一张加载图片的函数，最后要返回一个布尔值；
function checkLastImg(){
	//首先，我们要得到的是最后一张图片
	//同样，我们还是先来获取父级元素container，然后再通过前面我们所创建的getChildElement()函数，
	//来得到一个类名为box的数组
	var cparent = document.getElementById('container');
	var ccontent = getChildElement(cparent,'box');
	//下面的思路是我们根据最后一次加载的图片的高度来判断最后的加载情况
	//我们定义一个变量lastHeight来保存最后一张图片加载后的高度；
	var lastHeight = ccontent[ccontent.length - 1].offsetTop;
	//下面，我们再来获取滚动条滚动的距离
	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
	//再接下来，我们要获取当前页面可见范围的高度
	var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;
	//现在，我们来判断，当我们lastHeight的值小于滚动条滚动的距离+页面的高度时，此时，我们就需要加载图片了！
	if(lastHeight<scrollTop+pageHeight){
		return true;
	}
}
