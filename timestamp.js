var count=1;
var container=document.getElementById('container');
function getUserAction(e){
  container.innerHTML=count++;
  console.log(e);
}

var throttle=(method,delay)=>{
  let previous=0;
  let context,args;
  return function(){
    context=this;
    args=[].slice.call(arguments,0);
    let now=new Date();
    if(now-previous>delay){
      method.apply(context,args);
      previous=now;
    }
  }
}

container.onmousemove=throttle(getUserAction,1000);