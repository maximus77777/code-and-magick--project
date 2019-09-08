'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_CLOUD = 10;
var TEXT_X = 120;
var TEXT_Y = 40;
var GAP_TEXT = 20;
var GAP = 50;
var TEXT_WIDTH = 40;
var BAR_WIDTH = 40;
var barHeight = -140;

// Создание облако победителей
var getCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Создание текста поздравления
var getText = function (ctx, font, text, x, y) {
  ctx.fillStyle = '#000';
  ctx.font = font;
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {

  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};


// Выводим результат
window.renderStatistics = function (ctx, players, times) {

  getCloud(ctx, CLOUD_X + GAP_CLOUD, CLOUD_Y + GAP_CLOUD, 'rgba(0, 0, 0, 0.7)');
  getCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  getText(ctx, '16px PT Mono', 'Ура вы победили!', TEXT_X, TEXT_Y);
  getText(ctx, '16px PT Mono', 'Список результатов:', TEXT_X, TEXT_Y + GAP_TEXT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var totalHeightBar = (barHeight * times[i]) / maxTime;
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], TEXT_X + GAP_TEXT + (TEXT_WIDTH + GAP) * i, CLOUD_HEIGHT - GAP_CLOUD);
    ctx.fillText(Math.floor(times[i].toString()), TEXT_X + GAP_TEXT + (TEXT_WIDTH + GAP) * i, totalHeightBar + (CLOUD_HEIGHT - TEXT_Y));
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random();
    }
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - GAP_TEXT - GAP_CLOUD, BAR_WIDTH, totalHeightBar);
  }
};


