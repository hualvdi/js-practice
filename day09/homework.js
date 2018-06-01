window.onload=function(){
	counterChange();
}
function counterChange(){
	var counter = document.getElementById('counter');
	var links = document.getElementsByTagName('li');
	var content = document.getElementById('content');
	for(var i=0;i<links.length;i++){
		links[i].onclick = function(){
			this.className = 'yes';
			var num = this.innerText.trim().substring(0,2);
			var string = textChange(num);
			content.innerHTML = num+string;
		}
	}
}
function textChange(num){
	switch(num.trim()){
		case '1':
		return ' 月心系家~';
		case '2':
		return ' 月轰趴多~';
		case '3':
		return ' 月返工位~';
		case '4':
		return ' 月阴雨天~';
		case '5':
		return ' 月不减肥~';
		case '6':
		return ' 月桃花来~';
		case '7':
		return ' 月裙底飘~';
		case '8':
		return ' 月想放假~';
		case '9':
		return ' 月鬼知道哟~';
		case '10':
		return ' 月去旅游~';
		case '11':
		return ' 月编不下去了~';
		case '12':
		return ' 月爱咋咋滴~';
		default:
		break;
	}
}
