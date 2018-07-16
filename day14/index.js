window.onload = function (){
	this.bugFun();
}
 function bugFun(){
 	var initText = document.getElementById('bug').innerHTML;
 	var bugResult = document.getElementById('bugResult');
 	var very = document.getElementById('very').innerHTML;
 	var vareResult = document.getElementById('vareResult');
 	var reg1 = /bag|beg|big|bog/gi;
 	var reg2 = /really(\sreally)*/gi;
 	bugResult.innerHTML = initText.replace(reg1,'bug');
 	vareResult.innerHTML = very.replace(reg2,'very');
 }
 
 function strReplace(){
 	var subText = document.getElementById('subText').value;
 	var textArea = document.getElementById('textArea');
 	var reg = new RegExp(subText,'gi');
 	textArea.value = textArea.value.replace(reg,'**');
 }
 function submitForm(){
 	var name = document.getElementById('name').value;
 	var pwd = document.getElementById('pwd').value;
 	var nums = document.getElementById('nums').value;
 	var reg1 = /^\w*$/gi;
 	var reg2 = /^1\d{10}$/;
 	var test1 = reg1.test(name);
 	var test2 = reg2.test(Number(nums));
 	if(name.length<6){
 		alert('用户名长度小于6~');
 		return false;
 	}
 	if(nums ==null){
 		alert('手机号不能为空');
 		return false;
 	}
 	if(pwd.length<8 || pwd.length>16){
 		alert('密码长度应为8~16位');
 		return false;
 	}
 	if(!test1){
 		alert('用户名只包含数字,字母,下划线');
 		return false;
 	}
 	if(!test2){
 		alert('手机号只能输入数字, 且长度为11');
 		return false;
 	}
 	alert('用户名：'+name+' 密码：'+pwd+' 手机号：'+nums);
 }
function clearForm(){
	var name = document.getElementById('name');
 	var pwd = document.getElementById('pwd');
 	var num = document.getElementById('nums');
 	name.value = null;
 	pwd.value = null;
 	num.value = null;
}
