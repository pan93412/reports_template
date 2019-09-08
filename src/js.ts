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
  for (const imgClass in imgObject) {
    const elem: HTMLElement = document.querySelector('.' + imgClass)
    const imgURL: string = imgObject[imgClass].imagePath
    const setAs: string = imgObject[imgClass].setAs

    switch (setAs) {
      case 'imgsrc':
        elem.setAttribute('src', imgURL)
        break
      case 'bg':
        elem.style.setProperty('background-image', `url(${imgURL})`)
        break
      default:
        throw new Error("ERROR: We don't support the such things like " + setAs)
    }
  }
}

applyImgsToPage(img)