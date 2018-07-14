let grid;
let score = 0;

function setup() {
  createCanvas(400, 400);
  noLoop();
  grid = blankGrid();

  addNumber(grid);
  addNumber(grid);

  updateCanvas();
}

function updateCanvas() {
  background(255);
  drawGrid();
  select('#score').html(score);
}

function keyPressed() {
  let flipped = false;
  let rotated  = false;

  let played = true;

  if(keyCode === UP_ARROW) {
    grid = flipGrid(grid);
    flipped = true;
  }else if(keyCode === DOWN_ARROW) {
    // DO NOTHING
  }else if(keyCode === RIGHT_ARROW) {
    grid = rotateGrid(grid);
    rotated = true;
  }else if(keyCode === LEFT_ARROW) {
    grid = rotateGrid(grid);
    grid = flipGrid(grid);
    rotated = true;
    flipped = true;
  }else {
    played = false;
  }

  if(played) {
    let past = copyGrid(grid);

    for(let i = 0; i < 4; i++) {
      grid[i] = operate(grid[i]);
    }

    let changed = compare(past, grid);

    if(flipped) {
      grid = flipGrid(grid);
    }

    if(rotated) {
      grid = rotateGrid(grid);
      grid = rotateGrid(grid);
      grid = rotateGrid(grid);
    }

    if(changed) {
      addNumber(grid);
    }
  }

  updateCanvas();

  let gameover = isGameOver(grid);

  if(gameover) {
    console.log('GAME OVER');
  }

  if(isGameWon(grid)) {
    console.log('YOU WON');
  }
}

function operate(row) {
  row = slide(row);
  row = combine(row);
  row = slide(row);

  return row;
}
