

var game = {
	//成员变量
	data:null,//游戏启动后是一个二维数组，用来储存每个格子的数字
	RN:4,
	CN:4,
	state:0,
	RUNNING:1,
	GAMEOVER:0,
	score:0,
	//游戏的初始化
	 start:function(){
	 	this.state = this.RUNNING;//设置游戏的状态
	 	//初始化数据
	 	this.data = [];
	 	for(row=0;row <this.RN; row++){
	 		this.data[row]=[];
	 		for (col=0; col<this.CN; col++) {
	 			this.data[row][col] = 0;
	 		}
	 	}
	 	
	 	this.score = 0;
	 	//随机产生数字
	 	this.randomNum();
	 	//刷新页面
	 	this.updataView();
	 	
	 },
	 //刷新页面
	 updataView:function(){
	 	for (row=0;row<this.RN;row++) {
	 		for (col=0;col<this.CN;col++) {
	 			var num = document.getElementById("c"+row+col);
	 			if (this.data[row][col] != 0) {
	 				num.innerHTML = this.data[row][col];
	 				num.className = "cell n" + this.data[row][col];
	 			} else{
	 				num.innerHTML = "";
	 				num.className = "cell";
	 			}
	 		}
	 	}
	 	document.getElementById("score").innerHTML = this.score;
	 	if(this.state==this.GAMEOVER){
	 		//游戏结束时，出现成绩和按钮内容
	 		document.getElementById("btns").style.display="block";
	 		document.getElementById("finalscore").innerHTML = this.score;
	 	}else if(this.state == this.RUNNING){
	 		//游戏运行时隐藏结束时的信息。
	 		document.getElementById("btns").style.display = "none";
	 	}
	 },
	 
	 randomNum:function(){
	 	//注意要判断数据是否为已经满了！
	 	if(!this.isfull()){
	 		while(true){
	 		var row = parseInt(Math.random()*(this.RN));
	 		var col = parseInt(Math.random()*(this.CN));
	 		if(this.data[row][col]==0){
		 			this.data[row][col] = Math.random()>0.6?2:4;
		 			break;
	 			}
	 		}
	 	}
	 },
	 isfull:function(){
	 	for (row=0;row<this.RN;row++) {
	 		for (col=0;col<this.CN;col++) {
	 			if(this.data[row][col] == 0){
	 				return false;
	 			}
	 		}
	 	}
	 	return true;
	 },
	 isGameOver:function(){
	 	if(this.isfull()){
			for(var row=0;row<this.RN;row++){
				for(var col=0;col<this.CN;col++){
					if(col!=this.CN-1&&this.data[row][col]==this.data[row][col+1]){
						return false;
					}else if(row!=this.RN-1&&this.data[row][col]==this.data[row+1][col]){
						return false;
					}
				}
			}
			this.state=this.GAMEOVER;
			return true;	
		}else{					
			return false;				
		}
	 },

	 moveLeft:function(){
	 	//程序开始时数组字符串内容
	 	var beforeString = this.data.toString();
	 	for (row=0;row<this.RN;row++) {
	 		for (col=0;col<this.CN;col++) {
	 			this.nextRightNum(row,col);
	 		}
	 	}
	 	//更改完成后的字符串内容。
	 	var lastSring = this.data.toString();
	 	//如果发生改变了，就执行产生数字，游戏是否结束，刷新页面
	 	if(beforeString != lastSring){
	 		this.randomNum();
	 		this.isGameOver();
	 		this.updataView();
	 	}
	 },
	 nextRightNum:function(r,c){
	 	for (next=c+1;next<this.RN;next++) {
	 		if(this.data[r][next]!=0){
	 			if(this.data[r][c] == this.data[r][next]){
	 				this.data[r][c]*=2;
	 				this.data[r][next] = 0;
	 				this.score+=this.data[r][c];
	 				c++;
	 			}else if(this.data[r][c]==0){
	 				this.data[r][c] = this.data[r][next];
	 				this.data[r][next]= 0;
	 			}
	 			else{
	 				break;
	 			}
	 		}
	 	}
	 },
	 moveUp:function(){
	 	var beforeString = this.data.toString();
	 	for (row=0;row<this.RN;row++) {
	 		for (col=0;col<this.CN;col++) {
	 			this.nextDownNum(row,col);
	 		}
	 	}
	 	var lastSring = this.data.toString();
	 	if(beforeString != lastSring){
	 		this.randomNum();
	 		this.isGameOver();
	 		this.updataView();
	 	}
	 },
	 
	 nextDownNum:function(r,c){
	 	for (next=r+1;next<this.RN;next++) {
	 		if(this.data[next][c]!=0){
	 			if(this.data[r][c] == this.data[next][c]){
	 				this.data[r][c]*=2;
	 				this.data[next][c] = 0;
	 				this.score+=this.data[r][c];
	 				r++;
	 			}else if(this.data[r][c]==0){
	 				this.data[r][c] = this.data[next][c];
	 				this.data[next][c]= 0;
	 			}
	 			else{
	 				break;
	 			}
	 		}
	 	}
	 },
	  moveDown:function(){
	 	var beforeString = this.data.toString();
	 	for (row=this.RN-1;row>=0;row--) {
	 		for (col=0;col<this.CN;col++) {
	 			this.nextUpNum(row,col);
	 		}
	 	}
	 	var lastSring = this.data.toString();
	 	if(beforeString != lastSring){
	 		this.randomNum();
	 		this.isGameOver();
	 		this.updataView();
	 	}
	 },
	 
	 nextUpNum:function(r,c){
	 	for (next=r-1;next>=0;next--) {
	 		if(this.data[next][c]!=0){
	 			if(this.data[r][c] == this.data[next][c]){
	 				this.data[r][c]*=2;
	 				this.data[next][c]= 0;
	 				this.score+=this.data[r][c];
	 				r--;
	 			}else if(this.data[r][c]==0){
	 				this.data[r][c] = this.data[next][c];
	 				this.data[next][c]= 0;
	 			}
	 			else{
	 				break;
	 			}
	 		}
	 	}
	 	console.log(this.data);
	 },
	 moveRight:function(){
	 	var beforeString = this.data.toString();
	 	for (row=0;row<this.RN;row++) {
	 		for (col=this.CN-1;col>=0;col--) {
	 			this.nextLeftNum(row,col);
	 			
	 		}
	 	}
	 	var lastSring = this.data.toString();
	 	if(beforeString != lastSring){
	 		this.randomNum();
	 		this.isGameOver();
	 		this.updataView();
	 	}
	 	
	 },
	 nextLeftNum:function(r,c){
	 	for (next=c-1;next>=0;next--) {
	 		if(this.data[r][next]!=0){
	 			if(this.data[r][c] == this.data[r][next]){
	 				this.data[r][c]*=2;
	 				this.data[r][next] = 0;
	 				this.score+=this.data[r][c];
	 				c--;
	 			}else if(this.data[r][c]==0){
	 				this.data[r][c] = this.data[r][next];
	 				this.data[r][next]= 0;
	 			}
	 			else{
	 				break;
	 			}
	 		}
	 	}
	 }
	 		 
}



//当面加载时调用方法
window.onload = function(){
	game.start();
	//接受键盘事件
	document.onkeydown = function(){
		//适配不同的浏览器。
		var e = window.event||arguments[0];
		//判断接受到的按键是什么！然后决定数据移动的方向。
		if(e.keyCode == 37){
			game.moveLeft();
		}
		else if(e.keyCode == 38){
			game.moveUp();
		}
		else if(e.keyCode == 39){
			game.moveRight();
		}
		else if(e.keyCode == 40){
			game.moveDown();
		}
	}
}

