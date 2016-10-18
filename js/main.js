var WIDTH, HEIGHT;

function setup(){
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  createCanvas(WIDTH,HEIGHT);
  noStroke();
  background(0);

  if( isMobile.any() ){
    console.log('Mobile');
  } else{
    console.log('Desktop');
  }
}


function draw(){
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;


  // auto refresh on window resize
  if(WIDTH != window.innerWidth || HEIGHT != window.innerHeight) {
    document.getElementById('x').reload();
  }
  controller();
}



function controller(){
  //check mobile
  if(isMobile.any()){
    fill(255,0,0);
    ellipse(WIDTH/2,HEIGHT/2,100,100);
    console.log('mobile'); //debug
  }else{
    fill(0,255,0);
    ellipse(WIDTH/2,HEIGHT/2,100,100);
    console.log('desktop');  //debug
  }

}


//reference https://www.abeautifulsite.net/detecting-mobile-devices-with-javascript
var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};
