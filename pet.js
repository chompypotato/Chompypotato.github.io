//thanks to user derdere for the main code

function createSitePet(gfx) {
  if (!gfx) {
    gfx = 'sprite';
  }

  var ele = document.createElement("div");
  ele.style.position = 'fixed';
  ele.style.width = '64px';
  ele.style.height = '64px';
  ele.style.backgroundImage = `url(https://chompypotato.github.io/duck.png)`;
  ele.style.backgroundRepeat = 'no-repeat';
  ele.style.backgroundSize = 'cover';
  ele.style.transition = 'top 1500ms linear, left 1500ms linear, transform 1500ms linear';

  document.body.appendChild(ele);

  var x = 100;
  var y = Math.floor(window.innerHeight / 2);
  ele.style.top = `${y}px`;
  ele.style.left = `${x}px`;

  var moving = false;
  var direction = 1; // 1 for right, -1 for left

  var move = () => {
    let d = Math.round(Math.random() * 100) % 4;
    let sx = 0, sy = 0;
    
    if (d == 0) {
      sx = 64; // move right
    } else if (d == 1) {
      sx = -64; // move left
    } else if (d == 2) {
      sy = -64; // move up
    } else {
      sy = 64; // move down
    }
    
    // Boundary checks
    if (x + sx < 0 || x + sx > window.innerWidth - 64) {
      sx = -sx;
    }
    if (y + sy < 0 || y + sy > window.innerHeight - 64) {
      sy = -sy;
    }
    
    x += sx;
    y += sy;
    moving = true;
    ele.style.top = `${y}px`;
    ele.style.left = `${x}px`;
    
    if (sx !== 0) {
      direction = sx > 0 ? 1 : -1;
      ele.style.transform = `scaleX(${direction})`;
    }
  };

  setInterval(move, 1500);

  return ele;
}

