//
// function draw() {
//   var canvas = document.getElementById('canvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');
//
//     ctx.fillStyle = 'rgb(200, 0, 0)';
//     ctx.fillRect(10, 10, 50, 50);
//
//     ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
//     ctx.fillRect(30, 30, 50, 50);
//   }
// };

$(document).ready(function() {

  // BACK END
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var x = canvas.width/2;
  var y = canvas.height-30;
  var dx = 2;
  var dy = -2;
  var mySpeed = 30;

  var thisInterval;

  function myInterval(tmpSpeed){
    thisInterval = setInterval(draw, tmpSpeed);
  }

  function drawBall() {
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI*2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
  }

  function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
      checkBounds();
      x += dx;
      y += dy;
  }

  function checkBounds() {
    if (x >= (canvas.width - 10)) {
      dx = -2;
    }
    if (x <= 10) {
      dx = 2;
    }
    if (y >= (canvas.height - 10)) {
      dy = -2;
    }
    if (y <= 10) {
      dy = 2;
    }
  }


  // FRONT END
  $("button#go").click(function() {
    clearInterval(thisInterval);
    myInterval(30);
  });

  $("button#faster").click(function() {
    clearInterval(thisInterval);
    mySpeed -= 10;
    myInterval(mySpeed);

  });

  $("button#slower").click(function() {
    clearInterval(thisInterval);
    mySpeed += 10;
    myInterval(mySpeed);
  });



});
