window.onload = function (){
	this.eventChange();
	this.rightMenu();
	this.moveChange();
	this.clothesChange();
}
//自制菜单
function rightMenu(){
	var menus = document.getElementById('menus');
	var content = document.getElementById('content');
	menus.oncontextmenu = function(evt){
		var oEvent = evt || event;
		var init = getComputedStyle(content,null).display;
		if(init=='none'){
			content.style.display = 'block';	
		}else{
			content.style.display = 'none';
		}
		content.style.top = oEvent.clientY+'px';
		content.style.left = oEvent.clientX+'px';
		return false;
	}
	menus.onclick = function(evt){
		var oEvent = evt || event;
		if(oEvent.button == 0){
			content.style.display = 'none';	
		}
	}
}
//事件冒泡
function eventChange(){
	var bigBox = document.getElementById('bigBox');
	var eventBox = document.getElementById('eventBox');
	var box1 = document.getElementById('box1');
	var box2 = document.getElementById('box2');
	var box3 = document.getElementById('box3');
	eventBox.onclick = function(evt){
		//var oEvent = evt || window.event;
		console.log(getComputedStyle(eventBox,null).backgroundColor);
		this.style.backgroundColor = '#FF0000';
	}
	box1.onclick = function(evt){
		var oEvent = evt || event;
		oEvent.cancelBubble = true;//阻止冒泡
		this.style.backgroundColor = '#FF0000';
	}
	box2.onclick = function(evt){
		this.style.backgroundColor = '#FF0000';
	}
	box3.onclick = function(evt){
		this.style.backgroundColor = '#FF0000';
	}
	
}
//拖拽
function moveChange(){
	var box = document.getElementsByClassName('box')[0];
	var moveBox = document.getElementById('moveBox');
	var closeP = box.getElementsByTagName('p')[0];
	moveBox.onmousedown = function(evt){
		var oEvent = evt || event;
		var disx = oEvent.clientX - moveBox.offsetLeft;
		var disy = oEvent.clientY - moveBox.offsetTop;
		document.onmousemove = function(evt){
			var oEvent = evt || event;
			moveBox.style.top = oEvent.clientY - disy+'px';
			moveBox.style.left = oEvent.clientX - disx+'px';
		}
		document.onmouseup = function(evt){
			var oEvent = evt ||event;
			document.onmousemove = null;
			document.onmouseup = null;
		}
	}
	closeP.onclick = function(){
		window.close();
	}
}

function clothesChange(){
	var clothesBox = document.getElementsByClassName('clothesBox')[0];
	var cbox = document.getElementById('cbox');
	var links = cbox.getElementsByTagName('li');
	var des = document.getElementById('des');
	for(var i=0;i<links.length;i++){
		links[i].onmouseover = links[i].onclick = function(evt){
			var oEvent = evt || event;
			var imgs = this.getElementsByTagName('img')[0];
			for(var i=0;i<links.length;i++){
				links[i].className = '';
				des.style.display = 'none';
			}
			var src = imgs.getAttribute('src');
			des.setAttribute('src',src);
			des.style.top = oEvent.clientY+'px';
			des.style.left = oEvent.clientX+'px';
			des.style.display = 'block';
			this.className = 'imgSelect';
		}

	}
}
