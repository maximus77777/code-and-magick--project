'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_CLOUD = 10;
var TEXT_X = 120;
var TEXT_Y = 40;
var GAP_TEXT = 20;
//var FONT_GAP = 15;
//var TEXT_WIDTH = 50;
//var BAR_HEIGHT = 20;
//var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;


var getCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var getText = function (ctx, font, text, x, y) {
  ctx.fillStyle = '#000';
  ctx.font = font;
  ctx.fillText(text, x, y);
};

window.renderStatistics = function (ctx) {

  getCloud(ctx, CLOUD_X + GAP_CLOUD, CLOUD_Y + GAP_CLOUD, 'rgba(0, 0, 0, 0.7)');
  getCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  getText(ctx, '16px PT Mono', 'Ура вы победили!', TEXT_X, TEXT_Y);
  getText(ctx, '16px PT Mono', 'Список результатов:', TEXT_X, TEXT_Y + GAP_TEXT);
};

