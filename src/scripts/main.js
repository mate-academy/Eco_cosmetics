'use strict';

function changeImage(imageId = 0, imageId2 = 0) {
  const im = document.getElementsByClassName('main__shop--product--box--img');
  const im2 = document.getElementsByClassName('main__shop--product--box--img2');

  if (imageId !== 0) {
    for (let i = 0; i < im.length; i++) {
      im[i].style.display = 'none';
    }

    for (let i = 0; i < im2.length; i++) {
      im2[i].style.display = 'none';
    }

    const selectedImage = document.getElementById(imageId);
    const selectedImage2 = document.getElementById(imageId2);

    selectedImage.style.display = 'block';
    selectedImage2.style.display = 'block';
  }
}

changeImage();
