window.onload =function(){
	var account = document.getElementById('account');
	var passwords = document.getElementById('passsward');
	var redBox = document.getElementById('redBox');
	var description = document.getElementById('description');
	if(document.cookie){
		console.log('cookie: '+document.cookie);
		var len = document.cookie.split(';');
		var arr1 = len[0].split(',');
		var result1 = arr1[0].split('=');
		var result2 = arr1[1].split('=');
		if(len.length >1){
		var arr2 = len[1].split(',');
		var result3 = arr2[0].split('=');
		var result4 = arr2[1].split('=');
		if(result1.indexOf('user')!=-1){
			account.value = result1[1];
			passwords.value = result2[1];
			redBox.style.left = Number(result3[1]) + 'px';
			redBox.style.top =  Number(result4[1]) + 'px';
			description.innerHTML = "x:"+Number(result3[1])+" y:"+Number(result4[1]);
		}else{
			account.value = result3[1];
			passwords.value = result4[1];
			redBox.style.left = Number(result1[1]) + 'px';
			redBox.style.top =  Number(result2[1]) + 'px';
			description.innerHTML = "x:"+Number(result1[1])+" y:"+Number(result2[1]);
		}
		}else{
			if(result1.indexOf('user')!=-1){
			account.value = result1[1];
			passwords.value = result2[1];
		}else{
			redBox.style.left = Number(result1[1]) + 'px';
			redBox.style.top =  Number(result2[1]) + 'px';
			description.innerHTML = "x:"+Number(result1[1])+" y:"+Number(result2[1]);
		}
		}
	}
	this.moveLocation();
}
function save(){
	var account = document.getElementById('account').value;
	var passwords = document.getElementById('passsward').value;
	var daySelect = document.getElementById('daySelect').checked;
	if(account=='')return false;
	if(passwords=='')return false;
	if(daySelect){
		var date = new Date();
		date.setDate(date.getDate()+7);
		document.cookie ='user= '+account+',sessionId='+passwords+';expires='+date;
	}
}
function resets(){
	var account = document.getElementById('account');
	var passwords = document.getElementById('passsward');
	var daySelect = document.getElementById('daySelect');
	account.value = null;
	passwords.value = null;
	daySelect.checked = false;
}
function moveLocation(){
	var redBox = document.getElementById('redBox');
	var description = document.getElementById('description');
	redBox.onmousedown = function(evt){
		var oEvent = evt || event;
		var disX = oEvent.clientX - redBox.offsetLeft;
		var disY = oEvent.clientY - redBox.offsetTop;
		document.onmousemove = function(evt){
			var oEvent = evt || event;
			var x = oEvent.clientX - disX;
			var y = oEvent.clientY - disY
			redBox.style.left = x + 'px';
			redBox.style.top = y + 'px';
			description.innerHTML = "x:"+x+" y:"+y;
			document.cookie ='left= '+x+',top='+y;
		}
		document.onmouseup =  function(evt){
			var oEvent = evt || event;
			document.onmousemove = null;
			document.onmouseup = null;
		}
	}
}
//document.cookie = 'usr='+decodeURIComponent('984447560%40qq.com')+',passward='+encodeURIComponent('space54..');
//console.log('测试cookie:',document.cookie);
