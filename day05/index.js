/*
 * 示例
 * */
//求数组中所有元素的和
//让数组中的元素交换位置（重要）
//求数组的最大数和最小数（重要）
//求数组的最小数的下标（重要）
/*
 * 练习
 * */
//不改变原数组, 取出数组[3,2,4,5,8,6,3,9]中的[5,8,6]
function arraySlice(array){
	var newArray = array.slice(3,6);//mixIndex-maxIndex
	return newArray;
}
var result01 = arraySlice([3,2,4,5,8,6,3,9]);
console.log('练习题1：'+result01);

//在数组[1,2,3,4,6,7,8]中对应的位置插入5, 变成[1,2,3,4,5,6,7,8]
function arraySplice(array){
	array.splice(4,0,5)
	return array;
}
var result02 = arraySplice([1,2,3,4,6,7,8]);
console.log('练习题2：'+result02);

//将数组[“我”,“是”,“一”,“只”,“笨”,“鸟”]改成[“我”,“是”,“一”,“只”,“聪”,“明”,“鸟”], 并打印出: “我是一只聪明鸟”
function smartBrid(array){
	array.splice(4,1,'聪');
	array.splice(5,0,'明');
	//var newArray = array.join();//此时array是object类型，newArray是string类型,但两者元素相同
	var string = '';
	for(var i=0;i<array.length;i++){
		string +=array[i];
	}
	return string;
}
var result03 = smartBrid(['我','是','一','只','笨','鸟']);
console.log('练习题3：'+result03);

//删除数组[20,23,21,34,54,55,32]中的倒数第二个和倒数第三个元素
function arrayRemove(array){
	var length = array.length;
	array.splice(length-3,2);
	return array;
}
var result04 = arrayRemove([20,23,21,34,54,55,32]);
console.log('练习题4：'+result04);

/*
 * 作业
 * */
//随机给出一个五位以内的数，然后输出该数共有多少位，并将每位的数字保存到数组 中. 如:1342 //位数:4, [1,3,4,2]
function numberToArray(){
	var number = document.getElementById('input1').value;
	var printOut = document.getElementById('printOut');
	var length = number.length;
	
	if(length>5)return false;//输入判断
	if(length==0)return false;
	if(isNaN(number))return false;
	
	var newArray=number.split('');
	var string = number+'的长度是：'+length+' ,数组： '+newArray;
	printOut.firstChild.nodeValue=string;
	console.log(string);
}

//有一个从小到大排好序的数组。现输入一个数，要求按原来的规律将它插入数组中, 如:[2,3,4,56,67,98] //63
function arrayToSort(){
	//var array = document.getElementById('input2').value;
	var number = document.getElementById('input3').value;
	var array = [2,3,4,56,67,98];
	if(isNaN(number))return false;
	if(number == '')return false;
	var newArray = array.concat(Number(number));
	function sortNumber(a,b){
		return a-b;
	}
	newArray.sort(sortNumber);
	var description = document.getElementById('printOut2');
	description.firstChild.nodeValue = newArray;
}

//生成13位条形码(对之前的知识综合练习)
function barCode(number){
	var number = document.getElementById('input4').value;
	var printOut3 = document.getElementById('printOut3');
	if(isNaN(number))return false;//输入校验
	if(number == '')return false;
	if(number.length != 12){
		alert('输入长度为'+number.length+' 长度非法');
		return false;
	};
	var numberCount = 0;//运算和
	for(var i=0;i<number.length;i++){
		var stringToNumber = Number(number[i]);
		if(stringToNumber%2==0){
			numberCount += stringToNumber;
		}else{
			numberCount += stringToNumber*3;
		}
	};
	var length = numberCount.toString().length;
	var barCodeNumber = numberCount.toString()[length-1];
	var barCode = '';//验证码
	if(barCodeNumber == '0'){
		barCode = number+'0';
	}else{
		barCode = number+(10-barCodeNumber);
	}
	console.log(number+' 的奇数+偶数之和：'+numberCount,'验证码为：'+barCodeNumber);
	printOut3.firstChild.nodeValue = ' 带验证码的条码：'+barCode;
}

//个标题为“FlipFlop”的游戏应用程序
function filpflop(mixNumber,maxNumber){
	var string = '',count = 0,rule1Count = 0, rule2Count = 0,rule3Count = 0;
	while(mixNumber<=maxNumber){
		var rule1 = mixNumber%3==0;
	    var rule2 = mixNumber%5==0;
	    var rule3 = mixNumber%15==0;
		count++;
		if(rule3){
			string += 'FlipFlop'+' ';
			rule3Count++;
		}else if(rule2){
			string += 'Flop'+' ';
			rule2Count++;
		}else if(rule1){
			string += 'Filp'+' ';
			rule1Count++;
		}else{
			string += mixNumber+' ';
		}
		if(count %10==0){
			console.log(string);
			string = '';
		}
		mixNumber++;
	}
	console.log('被3整除的数共计：'+rule1Count,'，被5整除的数共计：'+rule2Count,'，被3整除又被5整除的数共计：'+rule3Count)
	
}
var result06 = filpflop(1,100);
