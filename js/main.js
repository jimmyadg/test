var WIDTH, HEIGHT;
var enemies = {};
var deviceID = 0;
var motion =0;




function setup(){
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  createCanvas(WIDTH,HEIGHT);
  noStroke();
  //background(0);

  // if( isMobile.any() ){
  //   console.log('Mobile');
  // } else{
  //   console.log('Desktop');
  // }
  controller();
}


function draw(){
  var onDeviceMotion = function(data) {
    motion = map(Math.round(data.accelerationIncludingGravity.x),-0.1,0.1,0,WIDTH);
    //console.log(data);
  };

  background(0);
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;

  // auto refresh on window resize
  if(WIDTH != window.innerWidth || HEIGHT != window.innerHeight) {
    document.getElementById('x').reload();
  }

  if(window.DeviceMotionEvent){
    window.addEventListener('devicemotion',onDeviceMotion,false);
  }else{
    console.log('not mobile device');
  }

  player();
}

function logic(){
  switch (expression) {
    case expression:

    break;

  }
}

function controller(){
  //check mobile
  if(isMobile.any()){
    //fill(255,0,0);
    console.log('mobile'); //debug
    deviceID = 1;
  }else{
    //fill(0,255,0);
    //ellipse(WIDTH/2,HEIGHT/2,100,100);
    console.log('desktop');  //debug
    deviceID = 2;
  }
}


function player(){
  if(deviceID == 1){
    //mobile
    fill(255,0,0);
    ellipse(motion, HEIGHT-100,100,100);
  }else if(deviceID ==2){
    //desktop
    fill(255,0,0);
    ellipse(mouseX, HEIGHT-100,100,100);
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

//enemies class

function enemies() {

};
