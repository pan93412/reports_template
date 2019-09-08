// Load images database.
import img from './imgs'

interface imageObject {
  [key: string]: string
}

function applyImgsToPage <T extends imageObject> (imgObject: T): void {
  for (const img in imgObject) {
    const elem: HTMLElement = document.querySelector('.' + img)
    elem.setAttribute('src', imgObject[img])
  }
}

applyImgsToPage(img)