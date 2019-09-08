// YOU MUST NOT REMOVE THIS LINE!
/// <reference path="imgs.d.ts"/>

// The images to insert into reports page.
import headerImage from './assets/image-2.jpg'
import sectionImage1 from './assets/image-1.png'

export default {
  'header-image': {
    setAs: 'bg',
    imagePath: headerImage
  },
  'example-image': {
    setAs: 'imgsrc',
    imagePath: headerImage
  },
  'section-image-1': {
    setAs: 'imgsrc',
    imagePath: sectionImage1
  }
}

/**
  imgs.ts - readme

  {
    '[class-name]': {
      setAs: 'bg|imgsrc',
      imagePath: '[image-url]'
    }
  }

  [class-name]:
    the class of the element to insert the image.

  setAs:
    where to be inserted?
    - bg: insert to the `background-image` of `style` property.
    - imgsrc: insert to the `src` property of `img` element.
  
  imagePath:
    where is the image?

    this template has been set up file-loader, so you
    can just import a image file the below way:

        import imgPath from 'path'
*/