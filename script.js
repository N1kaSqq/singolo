let menu = document.querySelectorAll(".alist");

for(let i=0; i<menu.length; i++){
    menu[i].addEventListener('click',()=>{
        menu.forEach((e) =>{e.classList.remove('active2')});
        menu[i].classList.add('active2');
    })
}

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click',  (e)=> {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  });
}

const Homebtn = document.querySelectorAll(".Home-button");

for (let key of Homebtn) {
    key.addEventListener('click',()=>{
        console.log(key);
        if(key.previousElementSibling.style.opacity==0){
            key.previousElementSibling.style.opacity=1;
        }   else {
            key.previousElementSibling.style.opacity=0;
        }
    });
}


arr = document.querySelectorAll(".element");
let array = [];
for (let i =0; i<12;i++) {
  array[i]=arr[i];
}
 
let prev =0 ;
let portfolioList = document.querySelectorAll(".portfolio-list");
let step=[];
for(let i=0; i<portfolioList.length; i++){
  step[i]=i;
}
for(let i=0; i<portfolioList.length; i++){
  portfolioList[i].addEventListener('click',()=>{
    portfolioList.forEach((e) =>{e.classList.remove('active-portfolio')});
    portfolioList[i].classList.add('active-portfolio');
    if(step[i]!=prev){
          let shuffledArr = array.sort(function(){
            return Math.random() - 0.5;
          });
          for (let i =0; i<12;i++) {
            document.querySelector(".flexbox").insertAdjacentElement("afterBegin", shuffledArr[i]);
          }
       prev = step[i];  }        
  })
}

let portfolioElement = document.querySelectorAll(".element");

for (let e of portfolioElement){
    e.addEventListener('click', ()=>{
      if(e.style.outline == "rgb(240, 108, 100) solid 5px"){
        e.style.outline = "rgb(240, 108, 100) solid 0px";
        return;
      }
      console.log( e.style.outline);
      for (let e of portfolioElement){
        e.style.outline = "0px solid #F06C64";
      }
      if(e.style.outline == "rgb(240, 108, 100) solid 0px"){
        e.style.outline = "rgb(240, 108, 100) solid 5px";
      }
      console.log(e.style.outline);
    });
  
  }


document.querySelector(".submit-btn").addEventListener("click",()=>{
let inputText =  document.querySelector(".input-text").value;
let inputTextarea =   document.querySelector(".input-textarea").value;
if(document.querySelector(".input-name").value!=""&&document.querySelector(".input-email").value!=""){
  console.log(inputTextarea);
  console.log(inputText);
  if(inputTextarea!=""&&inputText!=""){
    alert(
      `Письмо отправлено!
      Тема: ${inputText}
      Описание: ${inputTextarea}`
    ); 
    
  } else if(inputTextarea==""&&inputText!="") {
    alert(
      `Письмо отправлено!
      Тема: ${inputText}
      Описание: без опимания`
    ); 
  } else if(inputTextarea!=""&&inputText=="") {
    alert(
      `Письмо отправлено!
      Тема: без темы
      Описание: ${inputTextarea}`
    ); 
  } else {
    alert(
      `Письмо отправлено!
      Тема: без темы
      Описание: без описания`
    ); 
    
  }
}

});
document.querySelector("header").style.height="95px";

function changeHeader() {
  if(pageYOffset > 0){
    document.querySelector("header").style.height= "60px";
    document.querySelector("nav").style.height = "60px";
    document.querySelector("nav").style.paddingTop = "10px";
  } else {
    document.querySelector("header").style.height= "95px";
    document.querySelector("nav").style.height = "90px";
    document.querySelector("nav").style.paddingTop = "29px";
  }
  if (pageYOffset >= 0 && pageYOffset < 620) {
    menu.forEach((e) =>{e.classList.remove('active2')});
    document.querySelector("#homeLink").classList.add('active2');
  }

  if (pageYOffset > 620 && pageYOffset <= 1098) {
    menu.forEach((e) =>{e.classList.remove('active2')});
    document.querySelector("#servicesLink").classList.add('active2');
  }

  if (pageYOffset > 1098 && pageYOffset <= 1968) {
    menu.forEach((e) =>{e.classList.remove('active2')});
    document.querySelector("#portfolioLink").classList.add('active2');
  }

  if (pageYOffset > 2000 && pageYOffset <= 2700) {
    menu.forEach((e) =>{e.classList.remove('active2')});
    document.querySelector("#aboutLink").classList.add('active2');
  }

  if (pageYOffset > 2700) {
    menu.forEach((e) =>{e.classList.remove('active2')});
    document.querySelector("#contactLink").classList.add('active2');
  }
}
document.addEventListener("scroll", changeHeader);





//..............SLIDER




let items = document.querySelectorAll('.slider .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}
document.querySelector('.slider').style.backgroundColor = "#f06c64";
/* document.querySelector('slider').style.borderBottom = "5px solid blue";
 document.querySelector('slider').classList.add('slider-blue'); */

document.querySelector('.chev1').addEventListener('click', function() {
  
	if (isEnabled) {
    if(document.querySelector('.slider').style.backgroundColor == "rgb(240, 108, 100)"){
      document.querySelector('.slider').style.backgroundColor = "#648BF0";
    } else {
      document.querySelector('.slider').style.backgroundColor = "#f06c64";
    }
		previousItem(currentItem);
	}
});


document.querySelector('.chev2').addEventListener('click', function() {
 
	if (isEnabled) {
    if(document.querySelector('.slider').style.backgroundColor == "rgb(240, 108, 100)"){
      document.querySelector('.slider').style.backgroundColor = "#648BF0";
    } else {
      document.querySelector('.slider').style.backgroundColor = "#f06c64";
    }
		nextItem(currentItem);
	}
});

const swipedetect = (el) => {
  
	let surface = el;
	let startX = 0;
	let startY = 0;
	let distX = 0;
	let distY = 0;
	let startTime = 0;
	let elapsedTime = 0;

	let threshold = 150;
	let restraint = 100;
	let allowedTime = 300;

	

	surface.addEventListener('touchstart', function(e){
    
		if (e.target.classList.contains('chev')) {
			if (e.target.classList.contains('chev1')) {
				if (isEnabled) {
					previousItem(currentItem);
				}
			} else {
				if (isEnabled) {
					nextItem(currentItem);
				}
			}
		}
			var touchobj = e.changedTouches[0];
			startX = touchobj.pageX;
			startY = touchobj.pageY;
			startTime = new Date().getTime();
			e.preventDefault();
	}, false);

	surface.addEventListener('touchmove', function(e){
			e.preventDefault();
	}, false);

	surface.addEventListener('touchend', function(e){
			var touchobj = e.changedTouches[0];
			distX = touchobj.pageX - startX;
			distY = touchobj.pageY - startY;
			elapsedTime = new Date().getTime() - startTime;
			if (elapsedTime <= allowedTime){
					if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
							if ((distX > 0)) {
								if (isEnabled) {
									previousItem(currentItem);
								}
							} else {
								if (isEnabled) {
									nextItem(currentItem);
								}
							}
					}
			}
			e.preventDefault();
	}, false);
}

var el = document.querySelector('.slider');
swipedetect(el);