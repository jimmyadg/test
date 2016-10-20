var WIDTH, HEIGHT,ct,img,mgW,imgH;
var enemies = {};
var deviceID = 0;
var motion =0;
var beamPosX,beamPosY;
var pt =0;


function preload(){
  img = loadImage('asset/img.png');
}

function setup(){
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  createCanvas(WIDTH,HEIGHT);
  noStroke();
  controller();
}


function draw(){
  imgW = img.width/2;
  imgH = img.height/2;
  var onDeviceMotion = function(data) {
    motion = map(Math.round(data.accelerationIncludingGravity.x),-9,9,10,WIDTH-10);
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
  logic();
}

function logic(){
  ct = Date.now();
  console.log(ct-pt);
  if(beamPosX && beamPosY > 0){
    fill(254,255,252);
    rect(beamPosX,beamPosY,WIDTH/300,HEIGHT/12);
    if(ct - pt >= 1){
      if(deviceID == 1){
        beamPosY-=10;
      }else if(deviceID == 2){
        beamPosY-=6;
      }
      pt = ct;
    }
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
    //fill(255,0,0);
    image(img,motion-imgW/2,HEIGHT-imgH*2,imgW,imgH);
  }else if(deviceID ==2){
    //desktop
    //fill(255,0,0);
    image(img,mouseX-imgW/2,HEIGHT-imgH*2,imgW,imgH);
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


function mousePressed(){
  beamPosX = mouseX;
  beamPosY = HEIGHT - imgH*3;
  if(deviceID == 2){
    return true;
  }else{
    return false;
  }
}

function touchStarted(){
  beamPosX = motion;
  beamPosY = HEIGHT - imgH*4;
  if(deviceID == 1){
    return true;
  }else{
    return false;
  }
}
