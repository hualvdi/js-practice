window.onload = function(){
	this.inputPrat();
	this.mouseCheck();
}
function inputPrat(){
	var practice1 = document.getElementById('practice1');
	var input1 = document.getElementById('input1');
	var showText = document.getElementById('showText');
	var tex = document.getElementById('input1').value;
	input1.onselect = function(){
		showText.innerHTML = '文本被选中';
	}
	input1.onblur = function(e){
		if(e.target.value != e.target.defaultValue){
			showText.innerHTML = '文本被修改';
		}else{
			showText.innerHTML = '文本初始值';
		}
	}
}

function mouseCheck(){
	var redBox = document.getElementById('redBox');
	var colorArray = ['lightgreen','palevioletred','deeppink','hotpink','lightpink','mediumspringgreen','springgreen'];
	var top = getComputedStyle(redBox,null).top.split('px')[0];
	var left = getComputedStyle(redBox,null).left.split('px')[0];
	document.onkeydown = function(evt){
		var oEvent = evt || event;
		if(oEvent.ctrlKey){
			//ctrl+c
			if(oEvent.keyCode==67){
				redBox.style.backgroundColor = colorArray[Math.floor(Math.random()*7)];
			}
			//ctrl+shift+r
			if(oEvent.shiftKey){
				if(oEvent.keyCode==82){
					redBox.style.backgroundColor = 'pink';
				}
			}
			//37代表←   38代表↑  39代表→  40代表↓ 
			if(oEvent.keyCode==37){
		    left = left-5;
		    redBox.style.left = left+'px';
		    }
		if(oEvent.keyCode==38){
			oEvent.preventDefault();
		    top = top-5;
		    redBox.style.top = top+'px';	
		}
		if(oEvent.keyCode==39){
			left = left+5;
		    redBox.style.left = left+'px';
		}
		if(oEvent.keyCode==40){
			oEvent.preventDefault();
		    top++;
		    redBox.style.top = top+'px';
		}
		}else{
			if(oEvent.keyCode==37){
		    left--;
		    redBox.style.left = left+'px';
		}
		if(oEvent.keyCode==38){
			oEvent.preventDefault();
		    top--;
		    redBox.style.top = top+'px';	
		}
		if(oEvent.keyCode==39){
			left++;
		    redBox.style.left = left+'px';
		}
		if(oEvent.keyCode==40){
			oEvent.preventDefault();
		    top++;
		    redBox.style.top = top+'px';
		}
		}
		
	}
}
//左右上下移动
function moveFunc(way){
	var redBox = document.getElementById('redBox');
	var box = document.getElementsByClassName('redBox');
	var top = getComputedStyle(redBox,null).top.split('px')[0];
	var left = getComputedStyle(redBox,null).left.split('px')[0];
	if(way=='top'){
		top--;
		redBox.style.top = top+'px';
	}
	if(way=='bottom'){
		top++;
		redBox.style.top = top+'px';
	}
	if(way=='left'){
		left--;
		redBox.style.left = left+'px';
	}
	if(way=='right'){
		left++;
		redBox.style.left = left+'px';
	}
}



