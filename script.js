const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const box = 32;
const count = 16;

function createBackground() {
  context.fillStyle = '#000000';
  context.fillRect(0, 0, box * count, box * count);
}

createBackground();