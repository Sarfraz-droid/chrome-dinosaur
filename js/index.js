// jshint esversion:6

function jump() {
  let t = 0, x = 0, a = 10;
  let u = 60;

  function callback() {
    //    physics baazi
    document.querySelector("#player").style.bottom = x + "px";
   
    if(x>=0){
        requestAnimationFrame(callback);
        console.log("Trying to jump");
        t++;
        x = u * t - a/2 * Math.pow(t,2); 
    }
   
    else{
        x=0;
        t=0;
        document.querySelector("#player").style.bottom = x + "px";
    }
   
  }
  if(x>=0){
    callback();
}

}

$(document).keydown(function (e) {
  if (e.key === " " || e.key === "ArrowUp") {
    console.log("JUMP");
    jump();
  }
});
