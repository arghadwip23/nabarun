console.log('Hello World!');

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBbH3gIASwYSkRMcOhKZ5oHXH7QPTNf3FE",
    authDomain: "hbdsrmb.firebaseapp.com",
    projectId: "hbdsrmb",
    storageBucket: "hbdsrmb.appspot.com",
    messagingSenderId: "573945335907",
    appId: "1:573945335907:web:2aaaab3fb39e827f77e856",
    measurementId: "G-K3WKTK72FV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


const burst = new mojs.Burst({
  radius: { 0: 100 },
    count: 10,
    degree: 360,
    children: {
      fill: { 'black': 'grey' },
      duration: 1000,
      radius: 20
    }
});

anime({
  loop:true,
  targets: '#Display img',
  scale:'1.5',
  duration: 900,
  easing: 'easeInBounce',
  direction :'alternate'
});
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
var heart = document.getElementById("heart");
var ScreenF = document.getElementById("Display");
var ScreenS = document.getElementById("screenS");
var audio = document.getElementById('audio');
heart.addEventListener("click" , (e)=>{
  anime({
    targets:["#Display img" , "h4"],
    scale: 0,
    duration: 1000
   });
   burst.replay();
  setTimeout(()=>{
     ScreenF.style.display="none";
     ScreenS.style.display="flex";
     audio.play();
    var typed = new Typed('.element', options);
    setTimeout(anim,9000);
   } , 1000);
   

});

 var anim = ()=>{
   anime.timeline({ loop: false })
   .add({
     targets: '#cake',
     opacity: 1,
     duration: 1000,
     easing: "easeOutExpo",
     delay: 1000,
     scale:[0 , 1]
   }).add({
       targets: '.ml2 .letter',
       scale: [4, 1],
       opacity: [0 ,1],
       translateZ: 0,
       easing: "easeOutExpo",
       duration: 950,
       delay: (el, i) => 70 * i
     }).add({
       targets: "h2",
       scale : [2 , 1],
       opacity: 1 ,
       easing : "easeOutExpo",
       duration: 300
     }).add({
       targets : "sub",
       opacity:1,
       easing: "easeOutExpo",
       duration: 400
     });
 }
var options = {
  strings: [`"Count not the candles…see the lights they give. Count not the years, but the life you live. Wishing you a wonderful time ahead"`],
  typeSpeed: 45
};

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();


