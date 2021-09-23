// import openCV from './opencv.js';
import windowButtons from '../images/window-buttons.png';
import singleButton from '../images/single-button.png';
import openCV from './opencv.js';
import {loadImage} from './utils';

const drawCircles = (openCV: any, image: HTMLImageElement) => {
  const source = openCV.imread(image);
  const dest = openCV.Mat.zeros(source.rows, source.cols, openCV.CV_8U);
  const circles = new openCV.Mat();
  const color = new openCV.Scalar(255, 0, 0);
  openCV.cvtColor(source, source, openCV.COLOR_RGBA2GRAY, 0);
  // find circles
  openCV.HoughCircles(
    source,
    circles,
    openCV.HOUGH_GRADIENT,
    1,
    5,
    75,
    30,
    5,
    15
  );

  // draw circles
  for (let i = 0; i < circles.cols; ++i) {
    const x = circles.data32F[i * 3];
    const y = circles.data32F[i * 3 + 1];
    const radius = circles.data32F[i * 3 + 2];
    const center = new openCV.Point(x, y);
    openCV.circle(dest, center, radius, color);
  }
  const canvas = document.createElement('canvas');
  canvas.id = 'mycanvas';
  document.body.appendChild(canvas);
  openCV.imshow('mycanvas', dest);

  source.delete();
  dest.delete();
  circles.delete();
};

const templateMatch = (
  openCV: any,
  sourceImage: HTMLImageElement,
  templateImage: HTMLImageElement
) => {
  const source = openCV.imread(sourceImage);
  const template = openCV.imread(templateImage);

  const dest = new openCV.Mat();
  const mask = new openCV.Mat();
  openCV.matchTemplate(source, template, dest, openCV.TM_CCOEFF, mask);
  const result = openCV.minMaxLoc(dest, mask);
  const maxPoint = result.maxLoc;
  const color = new openCV.Scalar(255, 0, 0, 255);
  const point = new openCV.Point(
    maxPoint.x + template.cols,
    maxPoint.y + template.rows
  );
  openCV.rectangle(source, maxPoint, point, color, 2, openCV.LINE_8, 0);
  const canvas = document.createElement('canvas');
  canvas.id = 'mycanvas2';
  document.body.appendChild(canvas);
  openCV.imshow('mycanvas2', source);

  // clean up
  source.delete();
  template.delete();
  dest.delete();
  mask.delete();
};

openCV.onRuntimeInitialized = async () => {
  // const openCV = await loadOpenCV();
  const buttonsImage = await loadImage(windowButtons);
  const buttonImage = await loadImage(singleButton);
  drawCircles(openCV, buttonsImage);
  templateMatch(openCV, buttonsImage, buttonImage);
};
