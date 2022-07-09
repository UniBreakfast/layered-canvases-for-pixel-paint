export { DeepScene }

import { LayerBox } from './layer-box.js'
import { ButtonBar } from './button-bar.js'

class DeepScene {
  constructor(layerCount, basePixelSize) {
    this.layerBox = new LayerBox(layerCount, basePixelSize)
    this.buttonBar = new ButtonBar(layerCount)
  }

  settleAt(el) {
    this.parent = el
  }

  render() {
    if (!this.parent) return

    if (!this.el) {
      this.el = document.createElement('deep-scene')
    }

    this.el.replaceChildren(
      this.layerBox.render(),
      this.buttonBar.render(),
    )

    this.parent.appendChild(this.el)
  }
}
