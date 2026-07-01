const start=document.querySelector('#start')
start.style.cursor="pointer"
const stop=document.querySelector('#stop')
stop.style.cursor="pointer"
const randomColor=function(){
  const hex="0123456789ABCDEF";
  let color="#";
  for(let i=0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
}
console.log(randomColor());
let intervalId;
const startColor=function(){
  if(!intervalId){
    intervalId = setInterval(changeColor,100);
  }
  function changeColor(){
    document.body.style.backgroundColor=randomColor();
  }
};
const stopColor=function(){
  clearInterval(intervalId);
  intervalId=null;
};
document.querySelector('#start').addEventListener('click',startColor);
document.querySelector('#stop').addEventListener('click',stopColor);
