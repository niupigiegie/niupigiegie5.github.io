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

// 个人经历界面的附加内容区（点击三张图片可查看详情）
//初中
var img1 = document.querySelector(".img1");
var box1 = document.getElementById("box1");

console.log(img1);
img1.addEventListener("click",()=>{
	box1.style.display="block";//点击img1可使box1显现
})

let error1 = document.querySelector(".error1");
console.log(error1);
error1.addEventListener("click",function(){
	box1.style.display="none";
})

//高中
var img2=document.querySelector(".img2");
var box2=document.getElementById("box2");

console.log(img2);
img2.addEventListener("click",function(){
	box2.style.display="block";//点击img2可使box2显现
})

let error2=document.querySelector(".error2");
console.log(error2);
error2.addEventListener("click",function(){
	box2.style.display="none";
})

//大学
var img3=document.querySelector(".img3");
var box3=document.getElementById("box3");

console.log(img3);
img3.addEventListener("click",function(){
	box3.style.display="block";//点击img3可使box3显现
})

let error3=document.querySelector(".error3");
console.log(error3);
error3.addEventListener("click",function(){
	box3.style.display="none";
})

// var ul1=document.getElementById('ul1'),
//     ul2=document.getElementById('ul2'),
// 	ul3=document.getElementById('ul3'),
// 	change=document.getElementById('change');

// change.onclick=function(){
// 	if(ul1.style.display=='block'){
// 		ul1.style.display='none';
// 		ul2.style.display='block';
// 		ul3.style.display='none';
// 	}
// 	if(ul3.style.display=='block'){
// 		ul1.style.display='block';
// 		ul2.style.display='none';
// 		ul3.style.display='none';
// 	}
// 	if(ul2.style.display=='block'){
// 		ul1.style.display='none';
// 		ul2.style.display='none';
// 		ul3.style.display='block';
// 	}
// }