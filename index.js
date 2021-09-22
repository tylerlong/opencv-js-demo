const loadImageToCanvas = (url, cavansId) => {
  let canvas = document.getElementById(cavansId);
  let ctx = canvas.getContext('2d');
  let img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
  };
  img.src = url;
};

loadImageToCanvas('coins.png', 'canvasInput');
