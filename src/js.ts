// Load images database.
import img from './imgs'

interface imageObjectMeta {
  setAs: string
  imagePath: string
}

interface imageObject {
  [key: string]: imageObjectMeta
}

function applyImgsToPage (imgObject: imageObject): void {
  for (let imgClass in imgObject) {
    let elem: HTMLElement = document.querySelector('.' + imgClass)
    
    if (imgObject[imgClass].setAs === 'imgsrc') {
      elem.setAttribute('src', imgObject[imgClass].imagePath)
    } else {
      throw new Error("ERROR: We don't support the such things like " + imgObject[imgClass].setAs);
    }
  }
}

applyImgsToPage(img)