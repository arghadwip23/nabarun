console.log('Hello World!');
const burst = new mojs.Burst({
  radius: { 0: 100 },
    count: 10,
    degree: 360,
    children: {
      fill: { 'red': 'red' },
      duration: 1000,
      radius: 10
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
heart.addEventListener("click" , (e)=>{
  anime({
    targets:["#Display img" , "h4"],
    scale: 0,
    duration: 1000
   });
   burst.replay();
  setTimeout(()=>{
     ScreenF.style.display="none";
     ScreenS.style.display="block";
    // anim();
    var typed = new Typed('.element', options);
   } , 1000);

});

 var anim = ()=>{
   anime.timeline({ loop: true })
     .add({
       targets: '.ml2 .letter',
       scale: [4, 1],
       opacity: [0, 1],
       translateZ: 0,
       easing: "easeOutExpo",
       duration: 950,
       delay: (el, i) => 70 * i
     }).add({
       targets: '.ml2',
       opacity: 0,
       duration: 1000,
       easing: "easeOutExpo",
       delay: 1000
     });
 }
var options = {
  strings: [`मैं पहले जो कुछ भी था..🥺
  मैं अब और आगे सिर्फ तुम्हारा रहेना चाहता हूं..🥺
  और रहूंगा भी..🥺❤️
  Remeber always..
  You are mine &
    I am yours..🥺❤️`],
  typeSpeed: 50
};

