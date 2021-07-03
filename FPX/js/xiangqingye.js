/*动态菜单（相关赛事）*/
var mainM = document.getElementById('mainM'),
	subM = document.getElementById('subM'),
	tou = document.getElementById('tou'),
	backg = document.getElementById('backg');

mainM.onmousemove = function() {
	subM.style.display = 'block';
	tou.style.zIndex = "-1";
	backg.style.zIndex = "-1";
}
mainM.onmouseout = function() {
	subM.style.display = 'none';
	tou.style.zIndex = '100';
	backg.style.zIndex = "100";
}