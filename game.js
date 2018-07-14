function isGameOver(grid) {
  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      if(grid[i][j] === 0)  return false;
      if( j != 3 && grid[i][j] === grid[i][j+1]) return false;
      if( i != 3 && grid[i][j] === grid[i+1][j])  return false;
    }
  }
  return true;
}

function isGameWon(grid) {
  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      if(grid[i][j] === 2048) {
        return true;
      }
    }
  }

  return false;
}

function addNumber(grid) {
  let options = [];

  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      if(grid[i][j] === 0) {
        options.push({
          x: i,
          y: j
        });
      }
    }
  }

  if(options.length > 0) {
    let spot = random(options);
    let r = random(1);
    grid[spot.x][spot.y] = (r > 0.5) ? 2 : 4;
  }
}

function combine(row) {
  for (let i = 3; i >= 0; i--) {
    let a = row[i];
    let b = row[i-1];

    if(a === b) {
      row[i] = a + b;
      score += (row[i]);
      row[i-1] = 0;
    }
  }

  return row;
}

function slide(row) {
  let arr = row.filter(x => x);
  let missing = 4 - arr.length;
  let zeroes = Array(missing).fill(0);
  arr = zeroes.concat(arr);

  return arr;
}
