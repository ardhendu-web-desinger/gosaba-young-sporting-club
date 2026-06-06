// Card Animation

window.addEventListener("scroll", function () {

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

const cardTop = card.getBoundingClientRect().top;

if(cardTop < window.innerHeight - 100){

card.style.opacity = "1";
card.style.transform = "translateY(0)";

}

});

});

document.querySelectorAll(".card").forEach((card)=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition="all 0.8s ease";

});


// Registration Form

const form = document.querySelector(".reg-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("আপনার নিবন্ধন সফল হয়েছে!");

});

}


// WhatsApp Button Hover

const whatsapp = document.querySelector(".whatsapp");

if(whatsapp){

whatsapp.addEventListener("mouseover",()=>{

whatsapp.style.transform="scale(1.1)";

});

whatsapp.addEventListener("mouseout",()=>{

whatsapp.style.transform="scale(1)";

});

}

console.log("Website Loaded Successfully");
function createButterfly(x,y){

const butterfly=document.createElement("div");

butterfly.className="butterfly";

butterfly.innerHTML="🦋";

butterfly.style.left=x+"px";
butterfly.style.top=y+"px";

document.body.appendChild(butterfly);

setTimeout(()=>{
butterfly.remove();
},4000);

}

document.addEventListener("click",(e)=>{
createButterfly(e.clientX,e.clientY);
});

document.addEventListener("touchstart",(e)=>{
const touch=e.touches[0];
createButterfly(touch.clientX,touch.clientY);
});

window.addEventListener("scroll",()=>{

createButterfly(
Math.random()*window.innerWidth,
window.innerHeight-100
);

});
