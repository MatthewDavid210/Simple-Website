let font;

function preload() {
  font = loadFont('fonts/Edu_QLD.ttf');
}

function setup() {
  createCanvas(800, 400);
  textFont(font);
  textSize(60);
  fill(0);
  text("Matthew David", 50, 120); //
}
