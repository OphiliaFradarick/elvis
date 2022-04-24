var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  backgroundImage = loadImage("assets/IMG-5584.PNG");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
}

function draw() {
  background(backgroundImage);

  if(gameState ===1){
    background(0)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}