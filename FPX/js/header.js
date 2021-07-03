/*动态菜单*/
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

/*图片轮播以及左右箭头的点击功能*/
var prev = document.getElementById('prev'),
	next = document.getElementById('next'),
	content = document.getElementById('content');

var w1 = document.getElementById('w1'),
	w2 = document.getElementById('w2'),
	w3 = document.getElementById('w3'),
	w4 = document.getElementById('w4'),
	w5 = document.getElementById('w5'),
	w6 = document.getElementById('w6');

var lb = document.getElementById("lunbo");
var num = 1;
var arr = new Array('FPX.Mid Doinb',
					'FPX.Top Gimgoon',
					'FPX.Adc Lwx ',
					'FPX.Sup Crisp',
					'FPX.Jug Tian',
					'FPX.Top Nuguri');
var arr1 = new Array(w1, w2, w3, w4, w5, w6);

w1.onclick = function() {
	lb.src = "img/lunbo1.jpg";
	document.getElementById('lunPic').innerHTML = '<a href="xiangqing.html">' + arr[0] + '</a>';
	for (var j = 0; j < 6; j++) {
		if (j==0) {
		arr1[j].src = "./img/黑点.svg";
		} 
	else {
		arr1[j].src = "./img/未选中圆点.svg";
		}
	}
	num=1;
}
w2.onclick = function() {
	lb.src = "img/lunbo2.jpg";
	document.getElementById('lunPic').innerHTML = '<a href="xiangqing.html">' + arr[1] + '</a>';
	for (var j = 0; j < 6; j++) {
		if (j==1) {
		arr1[j].src = "./img/黑点.svg";
		} 
	else {
		arr1[j].src = "./img/未选中圆点.svg";
		}
	}
	num=2;
}
w3.onclick = function() {
	lb.src = "img/lunbo3.jpg";
	document.getElementById('lunPic').innerHTML = '<a href="xiangqing.html">' + arr[2] + '</a>';
	for (var j = 0; j < 6; j++) {
		if (j==2) {
		arr1[j].src = "./img/黑点.svg";
		} 
	else {
		arr1[j].src = "./img/未选中圆点.svg";
		}
	}
	num=3;
}
w4.onclick = function() {
	lb.src = "img/lunbo4.jpg";
	document.getElementById('lunPic').innerHTML = '<a href="xiangqing.html">' + arr[3] + '</a>';
	for (var j = 0; j < 6; j++) {
		if (j==3) {
		arr1[j].src = "./img/黑点.svg";
		} 
	else {
		arr1[j].src = "./img/未选中圆点.svg";
		}
	}
	num=4;
}
w5.onclick = function() {
	lb.src = "img/lunbo5.jpg";
	document.getElementById('lunPic').innerHTML = '<a href="xiangqing.html">' + arr[4] + '</a>';
	for (var j = 0; j < 6; j++) {
		if (j==4) {
		arr1[j].src = "./img/黑点.svg";
		} 
	else {
		arr1[j].src = "./img/未选中圆点.svg";
		}
	}
	num=5;
}
w6.onclick = function() {
	lb.src = "img/lunbo6.jpg";
	document.getElementById('lunPic').innerHTML = '<a href="xiangqing.html">' + arr[5] + '</a>';
	for (var j = 0; j < 6; j++) {
		if (j==5) {
		arr1[j].src = "./img/黑点.svg";
		} 
	else {
		arr1[j].src = "./img/未选中圆点.svg";
		}
	}
	num=6;
}

next.onclick = function() {
	num++;
	if (num == 7) {
		num = 1;
	}
	if (num >= 1 && num <= 6) {
		lb.src = "img/lunbo" + num + ".jpg";
		document.getElementById('lunPic').innerHTML = '<a href="xiangqing.html">' + arr[num - 1] + '</a>'
	}
	for (var i = 0; i < 6; i++) {
		if (i == (num - 1)) {
			arr1[i].src = "./img/黑点.svg";
		} else {
			arr1[i].src = "./img/未选中圆点.svg";
		}
	}
}
prev.onclick = function() {
	num--;
	if (num == 0) {
		num = 6;
	}
	if (num >= 1 && num <= 6) {
		lb.src = "img/lunbo" + num + ".jpg";
		document.getElementById('lunPic').innerHTML = '<a href="xiangqing.html">' + arr[num - 1] + '</a>'
	} 
	for (var i = 0; i < 6; i++) {
		if (i == (num - 1)) {
			arr1[i].src = "./img/黑点.svg";
		} else {
			arr1[i].src = "./img/未选中圆点.svg";
		}
	}
}

function play() {
	timers = setInterval(function() {
		next.onclick();
	}, 3000);
}

function stop() {
	clearInterval(timers);
}

content.onmouseout = play;
content.onmouseover = stop;
play();



/*两侧小广告*/
var time =document.getElementById('time'),
    aside=document.getElementById('aside') ,
	time2=document.getElementById('time2'),
	aside2=document.getElementById('aside2') ;

var i=10;
var time1=setInterval(timeEnd,1000);
function timeEnd(){
	console.log(i--);
	if(i==0){
		aside.remove();
		aside2.remove();
		clearInterval(time1);
		return;
	}
	time.innerHTML=i;
	time2.innerHTML=i;
}
function del(){
	aside.remove();
}
function del2(){
	aside2.remove();
}

