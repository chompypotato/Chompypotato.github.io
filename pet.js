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
  ele.style.backgroundPosition = '0px 0px';
  ele.style.transition = 'top 1500ms linear, left 1500ms linear';

  document.body.appendChild(ele);

  var x = -64;
  var y = Math.floor(Math.floor(window.innerHeight / 64) / 2) * 64;
  ele.style.top = `${y}px`;
  ele.style.left = `${x}px`;

  var moving = false;
  var direction = 1; // 1 for right, -1 for left

  var move = () => {
    let d = Math.round(Math.random() * 100) % 4;
    let sx = 0, sy = 0;
    
    if (d == 0) {
      sx = 64; // move right
      direction = 1;
    } else if (d == 1) {
      sx = -64; // move left
      direction = -1;
    } else if (d == 2) {
      sy = -64; // move up
    } else {
      sy = 64; // move down
    }
    
    // Boundary checks
    if (x <= 0) {
      sx = 64; direction = 1;
    } else if (x >= (window.innerWidth - 64)) {
      sx = -64; direction = -1;
    } else if (y <= 0) {
      sy = 64;
    } else if (y >= (window.innerHeight - 64)) {
      sy = -64;
    }
    
    x += sx;
    y += sy;
    moving = true;
    ele.style.top = `${y}px`;
    ele.style.left = `${x}px`;
    ele.style.transform = `scaleX(${direction})`; // Flip sprite for left/right movement
  };

  setInterval(move, 1500);

  return ele;
}
