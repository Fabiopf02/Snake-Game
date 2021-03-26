const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const box = 32;
const snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};
let direction = "right";

function createBackground() {
  context.fillStyle = '#000000';
  context.fillRect(0, 0, box * 16, box * 16);
}

function createSnake() {
  for(let i = 0;i < snake.length;i++) {
    context.fillStyle = '#ffffff';
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

function startGame() {
  createBackground();
  createSnake();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if(direction === "right") snakeX += box;
  if(direction === "left") snakeX -= box;
  if(direction === "up") snakeY -= box;
  if(direction === "down") snakeY += box;

  snake.pop();

  const newHead = {
    x: snakeX,
    y: snakeY,
  };

  snake.unshift(newHead);

}

const game = setInterval(startGame, 100);

