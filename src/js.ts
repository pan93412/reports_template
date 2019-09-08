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
    const elems: NodeListOf<HTMLElement> = document.querySelectorAll('.' + imgClass)
    const {imagePath, setAs} = {...imgObject[imgClass]}

    elems.forEach(elem => {
      switch (setAs) {
        case 'imgsrc':
          elem.setAttribute('src', imagePath)
          break
        case 'bg':
          elem.style.setProperty('background-image', `url(${imagePath})`)
          break
        default:
          throw new Error("ERROR: We don't support the such things like " + setAs)
      }
    })
  }
}

applyImgsToPage(img)