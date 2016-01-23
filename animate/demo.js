function Point(x, y) {
  this.x = x;
  this.y = y;
}

function Move(height, width, point) {
  this.height = height;
  this.width = width;
  this.color = "green";
  this.startX = point.x;
  this.startY = point.y
  this.position = "absolute";
  this.div = null;
  this.moveX = 0;
  this.moveY = 0;
  this.endX = 0;
  this.endY = 0;
  this.init = function() {
    this.createDiv();
  }
}
Move.prototype = {
  createDiv: function() {
    this.div = document.createElement("div");
    document.body.appendChild(this.div);
    this.calculate(this.div);
  },
  calculate: function(div) {
    this.moveX = this.startX - this.width / 2;
    this.moveY = this.startY - this.height / 2;
    div.style.background = this.color;
    div.style.height = this.height + "px";
    div.style.width = this.width + "px";
    div.style.position = this.position;
    div.style.top = this.moveY + "px";
    div.style.left = this.moveX + "px";
  },
  move: function(finalpoint, moveFunc) {
    var finalpoint = finalpoint || {};
    this.endX = finalpoint.x;
    this.endY = finalpoint.y;
    moveFunc.call(this, this.startX, this.startY, this.endX, this.endY,
      2000);
  }
}
Move.prototype.constructor = Move;
var lineFunc = function(x, y, x1, y1, during) {
  var speedX = (x1 - x) / during;
  var speedY = (y1 - y) / during;
  var start = Date.now();

  function move() {
    var diff = Date.now() - start;
    if (diff < during) {
      var nowX = x + speedX * diff;
      var nowY = y + speedY * diff;
      this.div.style.left = nowX + "px";
      this.div.style.top = nowY + "px";
      requestAnimationFrame(move.bind(this))
    }
  }
  move.call(this);
}

var acceFunc = function(x, y, x1, y1, during) {
  var x_a = (x1 - x) * 2 / Math.pow(during / 1000, 2);
  var y_a = (y1 - y) * 2 / Math.pow(during / 1000, 2);
  var start = Date.now();

  function move() {
    var diff = Date.now() - start;
    if (diff < during) {
      var nowX = x + 0.5 * x_a * Math.pow(diff / 1000, 2);
      var nowY = y + 0.5 * y_a * Math.pow(diff / 1000, 2);
      this.div.style.left = nowX + "px";
      this.div.style.top = nowY + "px";
      requestAnimationFrame(move.bind(this))
    }
  }
  move.call(this);
}
var green = new Move(20, 20, new Point(100, 100));
green.init();
// 匀速直线
// green.move(new Point(100, 300), lineFunc);
// 匀加速直线
green.move(new Point(100, 300), acceFunc);


// var Red = Object.create(Move);
// console.log(Red)
// 创建一个红色的球
var red = new Move(20, 20, new Point(80, 35));
red.color = "red";
red.init()
red.div.style.borderRadius = "50%";
red.r = 80;
// 圆周运动
var circleFunc = function(x, y, x1, y1, during) {
  var speed = 360 / during;
  var start = Date.now();

  function move() {
    var diff = Date.now() - start;
    var nowX = x + this.r * Math.sin(diff * speed * (Math.PI / 180));
    var nowY = y + (this.r - this.r * Math.cos(diff * speed * (Math.PI / 180)));
    this.div.style.left = nowX + "px";
    this.div.style.top = nowY + "px";
    requestAnimationFrame(move.bind(this))
  }
  move.call(this);
}
red.move(undefined, circleFunc);
