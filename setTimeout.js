var count=1;
var container=document.getElementById('container');
function getUserAction(e){
  container.innerHTML=count++;
  console.log(e);
}

var throttle=(method,delay)=>{
   let timer=null,context,args;
   return function(){
     context=this;
     args=[].slice.call(arguments,0);
     if(!timer){
       timer=setTimeout(function(){
         timer=null;//函数执行以后清空延时器，以便下一次触发函数
         method.apply(context,args);
       },delay);
     }
   } 
}

container.onmousemove=throttle(getUserAction,1000);
// function throttle(method,context){
//   clearTimeout(method.tId);
//   method.tId=setTimeout(function(){
//       method.call(context);
//   },100);
// }