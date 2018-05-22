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
/*作业*/
/*
 * 注册页面的简单数据校验
 * 
 * */
//用户名不可以用数字开头
function usrClick(){
	var user = document.getElementById('user').value;
	if(isNaN(user[0])==false){
		alert('用户名不可以用数字开头~');
		return false;
	}
	if(user.length<6 || user.length >20){
		alert('用户名长度不低于6，不高于20~');
		return false;
	}
	if(user.indexOf(' ')!=-1){
		alert('用户名不能有空格~');
		return false;
	}
}
function pawsswardClick(){
	var passward = document.getElementById('passsward').value;
	if(passward==''){
		alert('密码不能为空~');
		return false;
	}
	if(passward.indexOf(' ')!=-1){
		alert('密码不能有空格~');
		return false;
	}
}
function login(){
	var user = document.getElementById('user').value;
    var passward = document.getElementById('passsward').value;
    var loginDescription = document.getElementById('loginDescription');
	var text = '登录成功  用户名：'+user+' 密码:'+passward;
	loginDescription.innerHTML = text;
}
//字母数字组合验证码（四位） (如: 4YT8)
function newRandom(){
	var randomDes = document.getElementById('randomDescription');
	var string = '';
	for(var i=0;i<2;i++){
		var number = Math.round(Math.random());
		var charCode = Math.round(Math.random()*25+65);
		var str = String.fromCharCode(charCode);
		string += number+str;
	}
	randomDes.innerHTML = '随机码：'+string;
}
//找出字符串中出现次数最多的字母，将该字母和字母出现的次数拼接成一个新字符串，返回新字符串
function strHandle(){
	var str = document.getElementById('inputString2').value;
	var description = document.getElementById('descriptionStr2');
	var length = str.length;
	var obj = {},max = 0,maxChar = null;
	if(!isNaN(str) || str=='')return false;
	for(var i=0;i<length;i++){
		var char = str[i];
		if(obj[char]){
			obj[char]++;
		}else{
			obj[char] = 1;
		}
		
	}
	for(var key in obj){
		if(max<obj[key]){
			max = obj[key];
			maxChar = key;
		}
	}
	console.log('作业2---1：');
	console.log(obj)
	for(var key in obj){
		if(obj[key]== max){
			console.log('出现最多的字符及次数是：'+key+max)
		}
	}
	description.innerHTML = '作业2---1：'+'出现最多的字符及次数是: '+maxChar+max;
}
//将字符中单词用空格隔开,已知传入的字符串中只有字母,每个单词的首字母大写，请将每个单词用空格隔开，只保留一个单词的首字母大写
function submitString(){
	var str = document.getElementById('inputString').value;
	var description = document.getElementById('descriptionStr');
	var length = str.length;
	var result = str[0]+'';
	if(!isNaN(str) || str=='')return false;
	for(var i=1;i<length;i++){
		var code = str.charCodeAt(i);
		if(code>=65 && code <=90){
			var s = String.fromCharCode(code+32);
			result += ' '+s;
		}else{
			result += str[i];
		}
	}
	description.innerHTML = '作业2---2：'+result;
}
//已知一个字符串对象中，英语单词用各种非字母字符分割，统计单词的个数
function word(){
	var str = document.getElementById('inputString5').value;
	var description = document.getElementById('descriptionStr5');
	var length = str.length;
	var count = 0;
	if(!isNaN(str) || str=='')return false;
	for(var i=0;i<length;i++){
		var code = str.charCodeAt(i);
		if(code>=65 && code <=90){
			count++;
		}else if(code>=97 && code <=122){
			count++;
		}
	}
	description.innerHTML = '单词个数：'+count;
}
//将字符串按照单词进行逆序，空格作为划分单词的唯一条件传入:”Welome to Beijing”改为 “Beijing to Welcome”
function inverted(){
	var str = document.getElementById('inputString3').value;
	var description = document.getElementById('descriptionStr3');
	var array = str.split(' ').reverse();
	var string = '';
	for(var i=0;i<array.length;i++){
		string += array[i]+' ';
	}
	description.innerHTML = '作业3---1：'+string;
}

//由原数组的元素正序反序拼接而成传入[“One”, “Two”,”Three”] 返回[“One”, “Two”, “Three”,”Three”,”Two”, “One”]
function symmetry(array){
	var result =array;
	var length = array.length;
	for(var i=length-1;i>=0;i--){
		result.push(array[i]);
	}
	console.log('作业3---2：'+result);
}
var result32 = symmetry(['one','two','three']);

//实现函数，查找子串出现的次数，返回字符串str中出现substring的次数传入:”abcabcabc”, “abc”; 返回:3
function stringHandle(){
	var str = document.getElementById('inputString4').value;
	var description = document.getElementById('descriptionStr4');
	var obj = {},max = 0,maxStr = null;
	var length = str.length;
	for(var i=0;i<length;i++){
		var char = str[i];
		if(obj[char]){
			obj[char]++;
		}else{
			obj[char] = 1;
		}
	}
	for(var key in obj){
		if(max < obj[key]){
			max = obj[key];
			maxStr = key;
		}
	}
	console.log('作业3---3：');
	console.log(obj)
	for(var key in obj){
		if(obj[key]== max){
			console.log('出现次数最多的字符：'+key+' 出现次数： '+max)
		}
	}
	//description.innerHTML = '出现次数最多的字符：'+maxStr+'出现次数： '+max;
}
//已知千锋邮箱的用户名只能由数字字母下划线组成，域名为@1000phone.com,判断一个字符串是否是千锋邮箱，是返回true，不是返回false。
function email(){
	var str = document.getElementById('inputString6').value;
	var description = document.getElementById('descriptionStr6'); 
	var str1 = str.split('@')[0];
	var str2 = str.split('@')[1];
	var length =str1.length;
	if(str==''){
		alert('不能为空');
		return false;
	}
	for(var i=0;i<length;i++){
		if(isNaN(str1[i])){
		var code = str1.charCodeAt(i);
		var char1 = code>=65&& code<=90;
		var char2 = code>=97 && code <=122;
		if(!char1 && !char2 && code!=95){
			alert('用户名非法输入~')
			return false;
		}	
		}
		
	}
	console.log(str1,str2);
	if(str2 != '1000phone.com'){
		alert('邮箱@后缀格式错误');
		return false;
	}
	description.innerHTML = '邮箱验证正确：'+str;
}
