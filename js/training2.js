//判断一个整数，属于哪个范围：大于0；小于0；等于0
function intCheck(int){
	var string='';
	if(int>0){
		string = '大于0';
	}else if(int == 0){
		string = '等于0';
	}else{
		string = '小于0';
	}
	return string;
}
var result2=intCheck(45);
console.log('整数45:'+result2);

//判断一个整数是偶数还是奇数，并输出判断结果
function checkoOrj(num){
	num = num%2;
	var string = '';
	if(num == 0){
		string = '偶数';
	}else{
		string = '奇数';
	}
	return string;
}
var result3 = checkoOrj(45);
console.log('整数45:'+result3);

//开发一款软件，根据公式（身高-108）*2=体重，可以有10斤左右的浮动。来观察测试者体重是否合适
function cheackWeight(height,weight){
	var perfact = (height-108)*2
	var mixPerfact = perfact - 10;
	var maxPerfact = perfact + 10;
	var string = '';
	if(weight>mixPerfact && weight <maxPerfact){
		string = '体重适合';
	}else if(weight <mixPerfact){
		string = '体重过轻';
	}else{
		string = '体重过重';
	}
	return string;
}
var result5 = cheackWeight(160,90);
console.log('身高160,体重90:'+result5);

//已知圆的半径，求出圆的面积
function yuan(r){
	var s = parseInt(Math.PI*r*r);
	return s;
}
var result6 = yuan(3);
console.log('半径为3的圆的面积是：'+result6);

//随意输入一个年份，判断这个年份是否为闰年
function submit(){
	var input = document.getElementById('year').value;
	var runYaer1 = input%4==0 && input%100!=0;//能被4整除且不能被100整除
	var runYear2 = input%400==0;//能被400整除
	if(runYaer1 || runYear2){
		console.log(input+' 是闰年');
	}else{
		console.log(input+' 是平年');
	}
	
}

//输入年，月，日，求出该日期是当前年的第几天
function changeDay(){
	var date = document.getElementById('yearMonth').value;
	var year = date.split('-')[0];
	var month = date.split('-')[1];
	var day = date.split('-')[2];
	var days = 0;
	for(var i=1;i<=month-1;i++){
		var bigMonth = i==1 || i==3 ||i==5 || i==7 || i==8 || i==10 
		if(bigMonth){
			days +=31;
		}else{
			days +=30;
		}
	}
	days = days+parseInt(day);
	var runYear = year%4==0&& year%100!=0;
	var runYear2 = year%400==0;
	
	if(month>2){
		if(runYear ||runYear2){
		days -= 1;
	}else{
		days -= 2;
	}
	}
	
	console.log(date+'是当前年的第 '+days+' 天');
}

//石头剪刀布(设石头=1, 剪刀=2, 布=3, 两个人划拳, 比较他们的大小)
function gameResult(){
	var planner1 = stringToNum(document.getElementById('planner1').value);
	var planner2 = stringToNum(document.getElementById('planner2').value);
	if(planner1==1){
		if(planner2==2){
			console.log('石头>剪刀,A胜')
		}else if(planner2==3){
			console.log('石头<布,B胜')
		}else{
			console.log('石头=石头,平局')
		}
	}else if(planner1==2){
		if(planner2==3){
			console.log('剪刀>布,A胜')
		}else if(planner2==1){
			console.log('剪刀<石头,B胜')
		}else{
			console.log('剪刀=剪刀,平局')
		}
	}else if(planner1==3){
		if(planner2==1){
			console.log('布>石头,A胜')
		}else if(planner2==2){
			console.log('布<剪刀,B胜')
		}else{
			console.log('布=布,平局')
		}
	}else{
		console.log('输入有误，请重新输入！！！')
	}
}
function stringToNum(string){
	switch(string){
		case '石头':
		return 1;
		case '剪刀':
		return 2;
		case '布':
		return 3;
		default:
		return string;
	}
}
