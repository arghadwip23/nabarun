console.log('Hello World!');
const burst = new mojs.Burst({
  radius:{0:100}
});
anime({
  loop:true,
  targets: 'img',
  scale:'1.5',
  duration: 900,
  easing: 'easeInBounce',
  direction :'alternate'
});
var heart = document.getElementById("heart");
var ScreenF = document.getElementById("Display");
var ScreenS = document.getElementById("screenS");
heart.addEventListener("click" , (e)=>{
  anime({
    targets:["img" , "h4"],
    scale: 0,
    duration: 1000
   });
  setTimeout(()=>{
     ScreenF.style.display="none";
     ScreenS.style.display="block";
   } , 1000);

});

ScreenS.addEventListener("click" , ()=>{
  brust.replay();
})