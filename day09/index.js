function changeColor(){
	var colorBox = document.getElementById('colorBox');
	var stop = document.getElementById('stop');
	var wordSize = document.getElementById('wordSize');
	var colorArray = ['red','blue','yellow','green','pink','orange','cornflowerblue'];
	var sizeArray = ['22px','24px','26px','28px','30px','32px','34px'];
	var timer, i = 0;
	
	var length = colorArray.length-1,lengthsTo2 = (colorArray.length-1)*2;
	timer = setInterval(change,1000);
	
	function change(){
		console.log('gdgsag',i,length)
		if(i<length-1){
			colorBox.style.backgroundColor = colorArray[i];
			wordSize.style.fontSize = sizeArray[i];
			i++;
		}else if(i<lengthsTo2){
			colorBox.style.backgroundColor = colorArray[lengthsTo2-i];
			wordSize.style.fontSize = sizeArray[lengthsTo2-i];
			i++;
		}else{
			i = 0;
		}
	}
	stop.onclick = function(){
		clearInterval(timer);
	}
}

function save(){
	var name = document.getElementsByName('name')[0].value;
	var age = document.getElementsByTagName('input')[1].value;
	var education = document.getElementById('education').value;
	var profession = document.getElementsByClassName('profession')[0].value;
	alert('姓名:'+name+' 年龄:'+age+' 学历'+education+' 专业'+profession);
}

function startChange(){
	var stopChange = document.getElementById('stopChange');
	var timerBox = document.getElementsByClassName('timerBox')[0];
	var size = document.getElementById('size');
	var colorArray = ['red','blue','yellow','green','black','orange','cornflowerblue'];
	var sizeArray = ['12px','13px','14px','15px','16px','17px','18px'];
	var timer, i = 0;
	var length = colorArray-1,lengthsTo2 = (colorArray-1)*2;
	timer = setInterval(starts,100);
	function starts(){
		if(i<length){
			timerBox.style.backgroundColor = colorArray[i];
			size.style.fontSize = sizeArray[i];
			i++;
		}else if(i<lengthsTo2){
			timerBox.style.backgroundColor = colorArray[lengthsTo2-i];
			size.style.fontSize = sizeArray[lengthsTo2-i];
			i++;
		}else{
			i = 0;
		}
	}
	stopChange.onclick = function(){
		clearInterval(timer);
	}
}
