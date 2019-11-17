function parallaxFun(e, d, s){
	const item = document.querySelector(e);
	item.style.transform = `translateY(${d * s}px)`
}

window.addEventListener("scroll", function(){
	parallaxFun("header", window.scrollY, 1);
	parallaxFun(".small-rose", window.scrollY, 0.2);
	parallaxFun(".big-rose", window.scrollY, 0.2);
	parallaxFun(".small-rose1", window.scrollY, 0.6);
	parallaxFun(".small-rose2", window.scrollY, 0.5);
	parallaxFun(".small-rose3", window.scrollY, 0.4);
	parallaxFun(".small-rose4", window.scrollY, 0.3);
	parallaxFun(".small-rose5", window.scrollY, 0.3);
	parallaxFun(".small-rose6", window.scrollY, 0.3);
	parallaxFun(".small-rose7", window.scrollY, 0.8);
})