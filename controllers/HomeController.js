Daily.controller('HomeCtrl', function ($scope, $http, headerService, progressCircleService) {
  headerService.home();

  //activar practice
  var btnDaily = document.getElementById('btn-daily');
  var btnPractice = document.getElementById('btn-practice');
  if(localStorage.practice != undefined && localStorage.practice == '1') {
    btnDaily.classList.add('hidden');
    btnPractice.classList.remove('hidden');
  }
  else {
    btnDaily.classList.remove('hidden');
    btnPractice.classList.add('hidden');
  }
  

  
  var errLength = parseInt(Object.keys( JSON.parse(localStorage.errors) ).length);
  var activesLength = parseInt(Object.keys( JSON.parse(localStorage.actives) ).length);

  $scope.passed = Object.keys( JSON.parse(localStorage.actives) ).length - Object.keys( JSON.parse(localStorage.errors) ).length;
  $scope.level = parseInt((activesLength - errLength) / 10) + 1 ;
  $scope.perc = (((activesLength - errLength) / 10) - parseInt((activesLength - errLength) / 10)) * 10;
  if (Object.keys( JSON.parse(localStorage.errors) ).length >= 3)  $scope.countErrors = '+3';
  else $scope.countErrors = Object.keys( JSON.parse(localStorage.errors) ).length;


var canvas = document.getElementById('home-progress-canvas');
var wrapper = canvas.parentNode;
var widthWrapper = parseInt(window.innerWidth * 0.7);
widthWrapper = widthWrapper - widthWrapper%2;
wrapper.style.width = widthWrapper+'px';
wrapper.style.height = widthWrapper+'px';
wrapper.style.marginTop = '-'+( parseInt(window.innerWidth * 0.7)/2 - 17 )+'px';

canvas.width = wrapper.clientWidth;
canvas.height = wrapper.clientHeight;

var w = 8;
var a = 0;
var err = parseInt(errLength * 100 / 365);
var max = parseInt(activesLength * 100 / 365) - err;

var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = centerX - w/2;


function drawCircle(progress, color, lineWidth){
      var circ = Math.PI * 2;
      var quart = Math.PI / 2;
      
      context.beginPath();
      context.arc(centerX, centerY, radius, -(quart), ((circ) * progress/100) - quart, false);
      context.lineWidth = lineWidth;
      context.strokeStyle = color;
      context.lineCap = 'round';
      context.stroke();

}

window.requestAnimationFrame=(function(){
    return window.requestAnimationFrame || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame || 
        function(callback){window.setTimeout(callback,17);};
})();

function animate(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  a++;

  drawCircle(100, '#eee', w);
  if(a <= (max+err) && a > max) {
    drawCircle((a+err), '#ea694e', w-1);
  }
  if(a < max){
    drawCircle(a, '#6fce7e', w);
  }
  else {
    drawCircle(max, '#6fce7e', w);
  }

  if(a < (max+err)) {
    window.requestAnimationFrame(animate);
  }
}

animate();



});