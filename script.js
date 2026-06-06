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