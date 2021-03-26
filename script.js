const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const box = 32;
const count = 16;
const snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};

function createBackground() {
  context.fillStyle = '#000000';
  context.fillRect(0, 0, box * count, box * count);
}

function createSnake() {
  for(let i = 0;i < snake.length;i++) {
    context.fillStyle = '#ffffff';
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

createBackground();
createSnake();
