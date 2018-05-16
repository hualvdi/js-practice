//写个函数计算所有传入参数相乘的结果(参数数量不定)
function mutiplite(){
	var length = arguments.length;
	var count = 1,i = 0;
	while(i<length){
		count = count*arguments[i];
		i++;
	}
	return count;
}
var result01 = mutiplite(1,2,3,4,5,6);
console.log('所有参数相乘：'+result01);

//写个函数实现加减乘除运算
function numbersCompute(number1,number2){
	var number1 = document.getElementById('number1').value;
	var number2 = document.getElementById('number2').value;
	var operator = document.getElementById('operator').value;
	if(isNaN(number1) || isNaN(number2))return false;//注意非法输入
	if(number1==0 || number2==0)return false;
	var count = 0;
	switch(operator){
		case '+':
		count = Number(number1)+Number(number2);
		console.log(number1+operator+number2+'='+count);
		break;
		
		case '-':
		count = Number(number1)-Number(number2);
		console.log(number1+operator+number2+'='+count);
		break;
		
		case 'x':
		count = Number(number1)*Number(number2);
		console.log(number1+operator+number2+'='+count);
		break;
		
		case '*':
		count = Number(number1)*Number(number2);
		console.log(number1+operator+number2+'='+count);
		break;
		
		case '/':
		count = Number(number1)/Number(number2);
		console.log(number1+operator+number2+'='+count);
		break;
		
		case '÷':
		count = Number(number1)/Number(number2);
		console.log(number1+operator+number2+'='+count);
		break;
		
		default:
		console.log('运算符输入不合法，请重新输入')
		break;
	}
}

//写个函数实现n的阶乘
function factorial(){
	var input01 = document.getElementById('input1').value;
	var count = 1,i = 1;
	if(isNaN(input01)||input01==0)return false;//注意非法输入
	while(i<=input01){
		count = count*i;
		i++;
	}
	console.log(input01+' 阶乘为：'+count);
}
//找出0-100之间7的倍数，和包含7的数字
function numberAbout7(mixNumber,maxNumber){
	var string = '',count = 0;
	while(mixNumber<maxNumber){
		var rule1 = mixNumber%7==0;
		var rule2 = mixNumber%10==7;
		if(rule1 || rule2){
			count++;
			string += mixNumber+' ';
			if(count%5==0){
				console.log(string);
				string = '';
			}else if(mixNumber == 98){
				console.log(string);
				string = '';
			}
		}
		mixNumber++;
	}
	return count;
}
var result04 = numberAbout7(0,100);
console.log('0-100之间7的倍数，和包含7的数字共计：'+result04);

//不用for循环，计算0-100以内的数字和
function numberCount(mixNumber,maxNumber,count){
	if(mixNumber<maxNumber){
		count += mixNumber;
		return arguments.callee(mixNumber+1,maxNumber,count)
	}else{
		return count;
	}
}
var result05 = numberCount(0,100,0);
console.log('0-100以内的数字和: '+result05);

