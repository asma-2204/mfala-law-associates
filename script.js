
// COUNTER ANIMATION

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target =
+counter.getAttribute("data-target");

const current =
+counter.innerText;

const increment =
target / 100;

if(current < target){

counter.innerText =
Math.ceil(current + increment);

setTimeout(
updateCounter,
20
);

}else{

counter.innerText =
target + "+";

}

};

updateCounter();

});
// FADE IN ANIMATION

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";

}

});

},

{
threshold:0.1
}

);

const animatedElements =
document.querySelectorAll(
".stat-card,.practice-card,.lawyer-card"
);

animatedElements.forEach(el=>{

el.style.opacity="0";

el.style.transform=
"translateY(40px)";

el.style.transition=
"all 0.8s ease";

observer.observe(el);

});
const isArticlePage = window.location.pathname.includes("/articles/");

if(isArticlePage){
  if("scrollRestoration" in history){
    history.scrollRestoration = "manual";
  }
  sessionStorage.removeItem("scrollPosition");
  window.addEventListener("pageshow", function(){
    window.scrollTo(0, 0);
    requestAnimationFrame(function(){ window.scrollTo(0, 0); });
  });
}

document.addEventListener("DOMContentLoaded", function(){

if(isArticlePage){
  sessionStorage.removeItem("scrollPosition");
  window.scrollTo(0, 0);
  return;
}

const cards = document.querySelectorAll(".practice-card");

cards.forEach(card => {
card.addEventListener("click", function(){
sessionStorage.setItem(
"scrollPosition",
window.scrollY
);
});
});

const savedPosition =
sessionStorage.getItem("scrollPosition");

if(savedPosition){
window.scrollTo(
0,
parseInt(savedPosition)
);
}

});