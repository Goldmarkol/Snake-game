let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

//размер ячеек
let blockSize = 10;

//ширина холста в ячейке = ширина всего холста /размер ячейки
// 40
let widthInBlocks = width / blockSize;

//высота холста в ячейке = высота всего холста /размер ячейки
// 40
let heightInBlocks = height / blockSize;

let score = 0;

let drawBorder = function () {
  ctx.fillStyle = "Gray";
  // рисуем верхнюю часть рамки
  ctx.fillRect(0, 0, width, blockSize);
  //  рисуем нижнюю часть рамки
  ctx.fillRect(0, height - blockSize, width, blockSize);
  // рисуем левую часть рамки
  ctx.fillRect(0, 0, blockSize, height);
  // рисуем правую часть рамки
  ctx.fillRect(width - blockSize, 0, blockSize, height);
};

let drawScore = function () {
  ctx.font = "20px Courier";
  ctx.fillStyle = "Black";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Счет: " + score, blockSize, blockSize);
};

let gameOver = function () {
  // clearInterval(intervalId);
  ctx.font = "60px Courier";
  ctx.fillStyle = "Black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Конец игры", width / 2, height / 2);
};

drawBorder();
drawScore();
gameOver();
