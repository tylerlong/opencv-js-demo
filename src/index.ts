import cv from './opencv.js';
import windowButtons from '../images/window-buttons.png';

cv.onRuntimeInitialized = () => {
  console.log(cv);
  console.log(cv.Mat);

  const canvas = document.createElement('canvas');
  canvas.id = 'mycanvas';
  document.body.appendChild(canvas);
  const context = canvas.getContext('2d')!;
  const image = new Image();
  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0, image.width, image.height);
    const source = cv.imread('mycanvas');
  };
  image.src = windowButtons;
};
