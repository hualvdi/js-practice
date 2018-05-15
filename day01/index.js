//入职薪水10K，每年涨幅入职薪水的5%，5年后工资多少？
function money(initNum,count){
	if(count<5){
		return arguments.callee(initNum*1.05,count+1)
	}else{
		return initNum;
	}
	
}
var result2 = money(10,0)
console.log('5年后的工资：',result2);

//为抵抗洪水，战士连续作战89小时，编程计算共多少天零多少小时？
function timeToDay(time){
	var day = parseInt(time/24);
	var hour = time%24;
	return day+'天零' + hour + '小时';
}
var result3 = timeToDay(89);
console.log('89小时代表：',result3);

//将华氏温度（80度）转换为摄氏度，并以华氏度和摄氏度为单位分别显示该温度
function  unit(f){
	var c = parseInt((f-32)/1.8);
	return '摄氏度：'+ c;
}
var result4 = unit(80);
console.log('华氏度：'+ 80);
console.log(result4);

//给定一个三位数，分别把这个数字的百位、十位、个位算出来并显示
function numSmall(number){
	var b = parseInt(number/100); //百位
	var s = parseInt((number/10)%10); //十位
	var g = parseInt(number%10); //个位
	console.log(number+'的百位：'+ b);
	console.log(number+'的十位：'+ s);
	console.log(number+'的个位：'+ g);
}
var result5 = numSmall(654);