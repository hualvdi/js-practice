function hrefChange(string){
	var href = '../day08/详情页/'+string+'.html';
	console.log(href);
	location.href=href;
}
function goBack(){
	history.back();
}
function goTo(string){
	var href = string+'.html';
	console.log(href);
	location.href=href;
}

