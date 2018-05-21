/*练习*/
var practiceStr = "H e  l  ** l    o    Wo r         L d  !";
//1. 将下面的字符串str的敏感字符*用空字符串””替换; (要正确表示*得转义成:\*) 
function stringChange1(string){
	var result = string.replace(/\*/gi,'');
	console.log('练习题1：',result);
}
var practice01 = stringChange1(practiceStr);
//2. 将str的空格 用空字符串””替换;
function stringChange2(string){
	var result = string.replace(/ /gi,'');
	console.log('练习题2：',result);
}
var practice02 = stringChange2(practiceStr);
//3. 随机产生一个四位数的验证码（纯数字(0-9)生成一个字符串） Math.random()
function randon4(number){
	var string ='';
	for(var i=0;i<number;i++){
		string += Math.round(Math.random()*10);
	}
	console.log('练习题3：',string);
}
var practice03 = randon4(4);

//去掉字符串123@zh@qq.com中的@;
function check(str){
	var result = str.replace(/@/gi,'');
	console.log('练习题4：',result);
}
var practice04 = check('123@zh@qq.com'); 
//任意给定的一串字符，统计字符串里面的大写字母和小写字母的个数
function smallAndBig(str){
	var length = str.length;
	var small = 0,big = 0;
	for(var i=0;i<length;i++){
		var code = str.charCodeAt(i);
		if(code>=65 &&code<=90){
			small++;
		}else if(code>=95 &&code<=122){
			big++;
		}
	}
	console.log('练习题5：'+'长度为'+length+'的字符串'+str+'的小写字母共计'+small+'大写字母共计：'+big);
}
var practice05 = smallAndBig('nzgdsbZSFLn.;hahahahHHH'); 
//https://www.baidu.com/s?name=avery&age=20&sex=male,  取出name, age和sex的值
function getValue(str){
	var newStr = str.split('?')[1];
	var strArray = newStr.split('&');
	var name = strArray[0].split('=')[1];
	var age =  strArray[1].split('=')[1];
	var sex =  strArray[2].split('=')[1];
	console.log(str+'  练习题6：name, age和sex的值分别为'+name+' '+age+' '+sex);
}
var practice06 = getValue('https://www.baidu.com/s?name=avery&age=20&sex=male');

//已知有两个字符串str1 = ‘hello’ , str2 = ‘world’,将两个字符串组成一个;
function strConcat(str1,str2){
	var newStr = str1.concat(str2);
	console.log('练习题7：'+newStr);
}
var practice07 = strConcat('hello','world');
//已知字符串str = “I love BeiJing”,找出love的范围
function strSearch(str,ser){
	var newStr = str.search(ser);
	console.log('练习题8：'+newStr+'~'+(newStr+ser.length-1));
}
var practice08 = strSearch('I love BeiJing','love');
//已知字符串str = “I hate BeiJing!”,提取第3个字符到第5个字符
function strGet(str){
	var newStr = str.substring(3,6);
	console.log('练习题9：I hate BeiJing!第3个字符到第5个字符'+newStr);
}
var practice09 = strGet('I hate BeiJing');
//将字符串str = “When I was young, I love a girl in neighbor class.”中,从young提取到girl。但是不许数
function strChange(str,strStart,strEnd){
	var start = str.search(strStart);
	var end = str.search(strEnd);
	var result = str.substring(start,(end+strEnd.length));
	console.log('练习题10：I hate BeiJing!第3个字符到第5个字符'+result);
}
var practice10 = strChange('When I was young, I love a girl in neighbor class.','young','girl');

//获取65-90中的随机数, 并将该数当成ASCII码,转换成字母
function numRandom(num1,num2){
	var nemNum =Math.random()*(num2-num1)+num1;
	var str = String.fromCharCode(nemNum);
	console.log('练习题11：获取65-90中的随机数, 并将该数当成ASCII码,转换成字母  '+str);
}
var practice10 = numRandom(65,90);

/*综合练习*/
/*
 * 给定一个字符串(包含数字,大写字母和小写字母)例如：“abaasdFFggs3545jjkkGfDDsssss3444343”；问题如下：
 */
var bigStr = 'abaasdFFggs3545jjkkGfDDsssss3444343';
console.log('综合练习答案：针对字符串'+bigStr)
//1. 字符串的长度
var bigStrLength = bigStr.length;
console.log('字符串的长度 '+bigStrLength);
//2. 取出指定下标位置的字符：0,3,5,9;
var index0 = bigStr.charAt(0);
var index3 = bigStr.charAt(3);
var index5 = bigStr.charAt(5);
var index9 = bigStr.charAt(9);
var indexBig = index0+index3+index5+index9;
console.log('取出指定下标位置的字符：0,3,5,9  '+indexBig);
//3. 查找指定字符是否在以上字符串中存在：c;
var bigSerC = bigStr.search('c');
if(bigSerC!=-1){
	console.log('字符串中存在：c? yes')
}else{
	console.log('字符串中存在：c? no')
}
//4. 替换指定的字符: 将g替换为22,ss替换为b;
var bigReplace1 = bigStr.replace(/g/gi,'22');
var bigReplace2 = bigReplace1.replace(/ss/gi,'b');
console.log('替换指定的字符: 将g替换为22,ss替换为b   '+bigReplace2);
//5. 截取指定开始下标位置到结束位置的字符串: 取得3--8(包含8)的字符串;
console.log('3--8(包含8)的字符串 '+bigStr.substring(3,9));
//6. 遍历字符串，并将遍历出的字母两头添加符号“@”输出至当前的文档页面, 数字按原样显示,每行5个;
var stringPrinout = '@',count = 1 ;
for(var i=0;i<bigStrLength;i++){
	stringPrinout += bigStr[i];
	count++;
	if(count%5==0){
		console.log(stringPrinout);
		stringPrinout = '';
	}else if(i==bigStrLength-1){
		stringPrinout += '@';
		console.log(stringPrinout);
	}
}
