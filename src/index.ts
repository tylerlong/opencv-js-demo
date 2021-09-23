import openCV from './opencv.js';
import windowButtons from '../images/window-buttons.png';

openCV.onRuntimeInitialized = () => {
  const image = new Image();
  image.src = windowButtons;
  image.onload = () => {
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
      console.log(center);
      openCV.circle(dest, center, radius, color);
    }
    const canvas = document.createElement('canvas');
    canvas.id = 'mycanvas';
    document.body.appendChild(canvas);
    openCV.imshow('mycanvas', dest);

    // clean up
    source.delete();
    dest.delete();
    circles.delete();
  };
  image.src = windowButtons;
};
