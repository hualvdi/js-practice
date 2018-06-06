window.onload = function(){
	this.menuChange();
	this.imgChange();
}

//下拉菜单
function menuChange(){
	var content = document.getElementById('content');
    var menu = document.getElementById('menu');
    var links = menu.getElementsByTagName('li');
    menu.onmouseover = content.onmouseover = function(){
	    menu.style.display = 'block';
    }
    menu.onmouseout = content.onmouseout = function (){
	    menu.style.display = 'none';
    }
    for(var i=0;i<links.length;i++){
    	links[i].onclick = function(){
    		console.log(this);
    		for(var j=0;j<links.length;j++){
    			links[j].style.backgroundColor = '#000000';
    		}
    		this.style.backgroundColor = '#808080';
    		content.innerHTML = this.innerHTML;
    	}
    	
    }
}

function imgChange(){
	var gallery = document.getElementById('gallery');
    var bigImg = document.getElementById('bigImg');
    var links = gallery.getElementsByTagName('th');
    for(var i=0;i<links.length;i++){
    	links[i].onmouseover = function (e){
    		var imgs = this.getElementsByTagName('img')[0];
    		var src = imgs.getAttribute('src');
    		bigImg.setAttribute('src',src);
    	}
    }
}
