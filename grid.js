function blankGrid() {
  blank = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];

  return blank;
}

function copyGrid(arr) {
  let past = blankGrid();

  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      past[i][j] = arr[i][j];
    }
  }

  return past;
}

function compare(a, b) {
  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      if(a[i][j] !== b[i][j]) {
        return true;
      }
    }
  }

  return false;
}

function rotateGrid(oldGrid) {
  let newGrid = blankGrid();

  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      newGrid[i][j] = oldGrid[j][i];
    }
  }

  return newGrid;
}

function flipGrid(arr) {
  for(let i = 0; i < 4; i++) {
    arr[i].reverse();
  }

  return arr;
}

function drawGrid() {
  let w = 100;

  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      noFill();
      strokeWeight(2);
      stroke(0);
      let val = grid[i][j];
      let s = val.toString();
      stroke(0);
      if(val != 0) {
        fill(colorsSizes[s].color);
      }else {
        noFill();
      }
      rect(i*w, j*w, w, w, 15);
      if(grid[i][j] !== 0) {
        textAlign(CENTER, CENTER);
        noStroke();
        fill(0);
        textSize(colorsSizes[s].size);
        text(val, i*w + w/2, j*w + w/2);
      }
    }
  }
}
