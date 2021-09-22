import fs from 'fs';
import {PNG} from 'pngjs';
import subImageMatch from 'matches-subimage';
import path from 'path';

const img = PNG.sync.read(
  fs.readFileSync(path.join(__dirname, '..', 'images', 'window-buttons.png'))
);
const subImg = PNG.sync.read(
  fs.readFileSync(path.join(__dirname, '..', 'images', 'single-button.png'))
);
const result = subImageMatch(img, subImg, {threshold: 0.1});
console.log(result);
