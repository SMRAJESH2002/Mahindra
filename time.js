 const test=setInterval(demo,1000);
 function demo(){
     document.getElementById("checkTime").innerText=new Date().toLocaleTimeString();
 }
 setTimeout(stop,10000);
 function stop(){
     alert("------------Time going stop---------------")
     clearInterval(test);
 }