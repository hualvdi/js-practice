/*练习*/
//创建一个人的对象, 添加属性: 姓名 年龄 爱好 薪资期望, 并有一个打印自身信息的方法, 可以输出自身信息;
var person = {
	name:'小弟',
	age:'18',
	hobby:'吃饭睡觉',
	money:'111150000',
	printSelf:function(){
		console.log(person) ;
	}
};
var result01 = person.printSelf();

//创建一个锤子对象, 有属性:宽,高,重; 方法:可以锤钉子
var hammer = {
	width:100,
	height:100,
	weight:100,
	nail:function(){
		console.log('吹吹吹，锤钉子');
	}
}
var result02 = hammer.nail();
/*
 * 有一辆50km/h车,跑在一条1000km路上，问多少小时跑完？
     对象: 
	车Car 属性: 速度speed 50km/h
 	          功能: 跑在路上runOnRoad(Road)
	路Road 属性: 长度length 1000km
 */
var car = {
	speed:50,
	runOnRoad:function(length,speed){
		var time = length/speed;
		console.log('练习题3：'+time);
		return time;
	}
}
var Road = {
	length:1000,
}

var result03 = car.runOnRoad(Road.length,car.speed);
//获取当前时间并按括号内的格式打印（*年*月*日 星期* *：*：*）
function dateFormat(){
	var showNow =document.getElementById('showNow');
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var day2 = date.getDay();//星期几
	var hour = date.getHours();
	var min = date.getMinutes();
	var seconds = date.getSeconds();
	if(month<10){
		month = '0'+month;
	}
	if(day<10){
		day = '0'+day;
	}
	var result = year+'-'+month+'-'+day+' 星期'+day2+' '+hour+':'+min+':'+seconds;
	showNow.innerHTML = '当前时间：'+result;
}
var result04 = dateFormat();

var today = new Date();
console.log(today.toLocaleString());//2018/5/18 上午9:47:31

//实现秒表功能, 包含时,分,秒,毫秒，点击按钮1开始计时，点击按钮2结束计时
var hour = 0,minus = 0,second = 0,millisecond = 0;
var stopWatch = document.getElementById('stopWatch');
var timer;
function timerStart(){
	timer = window.setInterval(addTimer,50);
}
function timerStop(){
	window.clearInterval(timer);
}
function timerClear(){
	window.clearInterval(timer);
	hour=minus=second=millisecond=0;
	stopWatch.innerHTML = '00时00分00秒000毫秒';
}
function addTimer(){
		millisecond += 50;
		if(millisecond>=1000){
			millisecond = 0;
			second += 1;
		}
		if(second>=60){
			second = 0;
			minus +=1;
		}
		if(minus>=60){
			minus = 0;
			hour += 1;
		}
		if(hour >=24){
			hour = 0;
			minus = 0;
			second = 0;
			millisecond = 0;
		}
		stopWatch.innerHTML = hour+'时'+minus+'分'+second+'秒'+millisecond+'毫秒';
	}


//判断两个日期相差的天数
function dayMinus(firstDate,secondDate){
	var input1 = document.getElementById('firstDate').value;
	var input2 = document.getElementById('secondDate').value;
	if(input1=='' || input2=='')return false;
	var printOutDate = document.getElementById('printOutDate');
	var firstTime = new Date(input1).getTime();
	var secondTime = new Date(input2).getTime();
	var days = Math.abs(firstTime- secondTime)/(1000 * 60 * 60 * 24);
	var text = '两个日期相差的天数:'+days;
	printOutDate.innerHTML=text;
};

//使用定时器实现进度条
function changeWidth(){
	var barStart = document.getElementById('barStart');
	var description = document.getElementById('process');
	var proBar = document.getElementById('progressBar');
	var barW = 0,timer;
	barStart.style.display ='none';
	function addWidth(){
		barW += 20;
		if(barW<200){
			proBar.style.width = barW + 'px';
	        description.innerHTML = (barW/200)*100+' %'; 
		}else{
			window.clearInterval(timer);
			proBar.style.width = 200 + 'px';
	        description.innerHTML = '100 %';
	        //barStart.style.display ='inline-block';
		}
	}
	timer =window.setInterval(addWidth,1000);
}

