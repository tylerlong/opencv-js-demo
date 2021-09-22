import cv from './opencv.js';
import windowButtons from '../images/window-buttons.png';

console.log(cv);
console.log(cv.Mat);

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const context = canvas.getContext('2d')!;
const image = new Image();
image.onload = () => {
  canvas.width = image.width;
  canvas.height = image.height;
  context.drawImage(image, 0, 0, image.width, image.height);
  const source = cv.imread(canvas);
};
image.src = windowButtons;
