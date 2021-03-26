const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const box = 32;
const snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};
let direction = "right";
const food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box,
};

const movements = {
  37: () => {
    if (direction != "right") direction = "left";
  },
  38: () => {
    if (direction != "down") direction = "up";
  },
  39: () => {
    if (direction != "left") direction = "right";
  },
  40: () => {
    if (direction != "up") direction = "down";
  },
}

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

function drawFood() {
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event) {
  const move = movements[event.keyCode];
  move();
}

function startGame() {
  if(snake[0].x > 15 * box && direction === "right") snake[0].x = 0;
  if(snake[0].x < 0 && direction === "left") snake[0].x = box * 16;
  if(snake[0].y > 15 * box && direction === "down") snake[0].y = 0;
  if(snake[0].y < 0 && direction === "up") snake[0].y = box * 16;

  createBackground();
  createSnake();
  drawFood();

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

