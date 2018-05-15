//一个新入职，月工资为2000元的员工，每年涨当年工资5%，20年后的月工资是多少？
function yearMoneyTo20(initMoney,count){
	while(count <20){
		initMoney = initMoney*1.05;
		count++;
	}
	return initMoney;
}
var result01 = yearMoneyTo20(2000,0);
console.log('20年后的工资是：'+result01);

//一口缸可以装50升水，现在有15升水，小和尚每次可以挑5升，小和尚要挑几次水才可以把水缸挑满？
var initWater = 15;
function carringWater(initWater){
	var i = 0;
	while(initWater <50){
		i++;
		initWater += 5;
	};
	return i;
}
var result02 = carringWater(initWater);
console.log('小和尚要挑 '+result02+' 次才可以装满水缸')

//打印100–200之间所有能被3或者7整除的数
function checkNumber(mixNumber,maxNumber){
	var count =0,temp = '' ;
	while(mixNumber<maxNumber){
		var check = mixNumber%3==0 || mixNumber%7==0;
		if(check){
			count++;
			temp += mixNumber+' ';
			var countOut = count%10==0;
			var last=maxNumber-mixNumber;//最后一个被这个整除的数字比200小2
			if(countOut){
					console.log(temp);
					temp = '';
				}else if(last == 2){
					console.log(temp);
				temp = '';
				}
			}
		mixNumber++;
	}
	return count;
}
var result03 = checkNumber(100,200);
console.log('在100~200之间，共计'+result03+'个数字可以被3或者7整除')

//计算10的阶乘   (1*2*3*4*5*6*7*8*9*10   n的阶乘1*2……*n)
function factorial(number){
	var count = 1;
	for (var i=1;i<=number;i++){
		count = count*i;
	}
	return count;
}
var result05 = factorial(10);
console.log('10的阶乘是：'+result05);

//计算1+3+5+...+99的和
function accumulation(maxNumber){
	var count = 0;
	for (var i=0;i<maxNumber;i++){
		count = count+i;
	}
	return count;
}
var result06 = accumulation(100);
console.log('1+3+5+...+99的和是：'+result06);

//99乘法表
function mutiplite99(){
	var string = '';
	for (var i=1;i<10;i++){
		for(var j=1;j<=i;j++){
			string += i+'*'+j+'='+(i*j)+' ';
			if(j==i){
				console.log(string);
				string= '';
			}
			
		}
	}
}
var result07 = mutiplite99();

//判断一个数是不是合数。(指自然数中除了能被1和本身整除外，还能被其他的数整除（不包括0)的数。)

//输出20-80之间能被3整除的整数，每5个一行
function checkNumberTo3(mixNumber,maxNumber){
	var count =0, temp = '';
	while(mixNumber<maxNumber){
		var check = mixNumber%3==0;
		if(check){
			++count;
			temp +=mixNumber.toString()+' ';
			var countOut = count %5==0;
			if(countOut){
			console.log(temp);
			temp = '';
			}
		}
		mixNumber++;
	}
	return count;
}
var result10 = checkNumberTo3(20,80);
console.log('在20~80之间，共计'+result10+'个数字可以被3整除');

//打印出1000-2000年中所有的闰年，并以每行四个数的形式输出
function  runYearOut(mixYear,maxYear){
	var count = 0,string = '';
	while(mixYear<maxYear){
		var runYear1 = mixYear%4==0 && mixYear%100!=0;
		var runYear2 = mixYear%400==0;
		if(runYear1 || runYear2){
			string += mixYear+' ';
			count++;
			var countOut = count%4==0;
			if(countOut){
				console.log(string);
				string = '';
			}else if(mixYear == 1996){
				console.log(string);
				string = '';
			}
		}
		mixYear++;
	}
	return count;
}
var result12 = runYearOut(1000,2000);
console.log('1000-2000年中所有的闰年,共计：'+result12);
