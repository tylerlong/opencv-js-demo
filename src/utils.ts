// import openCV from './opencv.js';

export const loadImage = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = () => {
      resolve(image);
    };
    image.onerror = () => {
      reject();
    };
  });
};

// export const loadOpenCV = (): Promise<any> => {
//   return new Promise<any>(resolve => {
//     openCV.onRuntimeInitialized = () => {
//       resolve(openCV);
//     };
//   });
// };
