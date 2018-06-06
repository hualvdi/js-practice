//动态表格
function submit(){
	var id = document.getElementById('inputID').value;
	var name = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var tbody = document.getElementById('tbody');
	var tr = document.createElement('tr');
	//console.log(tr);
	if(id=='')return false;
	if(name=='')return false;
	if(phone=='')return false;
	var th1 = document.createElement('th');
	th1.innerHTML = id;
	var th2 = document.createElement('th');
	th2.innerHTML = name;
	var th3 = document.createElement('th');
	th3.innerHTML = phone;
	var th4 = document.createElement('th');
	var a = document.createElement('a');
	a.innerHTML = '删除';
	a.setAttribute('onclick','deleteTr(this)')
	th4.appendChild(a);
	tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);
	tr.appendChild(th4);
	tbody.appendChild(tr);
}
function deleteTr(a){
	var tr = a.parentNode.parentNode;
	var tbody = document.getElementById('tbody');
	tbody.removeChild(tr);
}
//碰撞小球
var blueBox = document.getElementById('blueBox');
var redBox = document.getElementById('redBox');
var runBox = document.getElementById('runBox');
var timer1 = null,timer2 = null,moveX = 1,moveY = 1,movez = 1,movek = 1, x = 20, y = 20,z = 8,k = 8;
//console.log(runBox.clientWidth , redBox.offsetWidth,redBox.clientWidth);
function moveBoll(){
	if(moveX){
		x = x+Math.random()*5;
		if(x>=runBox.clientWidth-redBox.clientWidth){
			moveX = 0;
		}
		redBox.style.right = x+'px';
	}else{
		x--;
		if(x<=0){
			moveX = 1;
		}
		redBox.style.right = x+'px';
	}

	if(moveY){
		y++;
		if(y>=runBox.clientHeight-redBox.clientHeight){
			moveY = 0;
		}
		redBox.style.bottom = y+'px';
	}else{
		y--;
		if(y<=0){
			moveY = 1;
		}
		redBox.style.bottom = y+'px';
	}
}
function moveBule(){
	if(movez){
		z = z+Math.random()*3;
		if(z>=runBox.clientWidth-blueBox.clientWidth){
			movez = 0;
		}
		blueBox.style.left = z+'px';
	}else{
		z--;
		if(z<=0){
			movez = 1;
		}
		blueBox.style.left = z+'px';
	}

	if(movek){
		k++;
		if(k>=runBox.clientHeight-blueBox.clientHeight){
			movek = 0;
		}
		blueBox.style.top = k+'px';
	}else{
		k--;
		if(k<=0){
			movek = 1;
		}
		blueBox.style.top = k+'px';
	}
}
function startRun(){
timer1 = setInterval(moveBoll,0.5);
timer2 = setInterval(moveBule,0.5);
}
function stopRun(){
	clearInterval(timer1);
	clearInterval(timer2);
}

//tab切换
var title = document.getElementById('menu_title');
var content = document.getElementById('menu_content');
var links = title.getElementsByTagName('li');
var texts = content.getElementsByTagName('p');
for(var i=0;i<links.length;i++){
	links[i].index = i;
	links[i].onclick = function(){
		for(var k=0;k<links.length;k++){
			links[k].className = '';
		}
		for(var j=0;j<texts.length;j++){
			texts[j].style.display = 'none';
		}
		this.className = 'select';
		texts[this.index].style.display = 'block';
		
	}
}



