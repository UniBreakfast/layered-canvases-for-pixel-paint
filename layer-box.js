export { LayerBox }

import { Layer } from './layer.js'

class LayerBox {
  layers = []

  constructor(layerCount, basePixelSize) {
    for (let i = 0; i < layerCount; i++) {
      this.layers.push(new Layer(i, basePixelSize))
    }
  }

  render() {
    if (!this.el) {
      this.el = document.createElement('div')
      this.el.className = 'layers'
    }

    this.el.replaceChildren(
      ...this.layers.map(layer => layer.render())
    )

    return this.el
  }
}
