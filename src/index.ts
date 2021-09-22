import cv from './opencv.js';
import windowButtons from '../images/window-buttons.png';

console.log(cv);

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const context = canvas.getContext('2d')!;
const img = new Image();
img.crossOrigin = 'anonymous';
img.onload = function () {
  canvas.width = img.width;
  canvas.height = img.height;
  console.log(img.width, img.height);
  context.drawImage(img, 0, 0, img.width, img.height);
};
img.src = windowButtons;
