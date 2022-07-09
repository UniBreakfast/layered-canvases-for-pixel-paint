export { Layer }

class Layer {
  constructor(depth, basePixelSize) {
    this.depth = depth
    this.basePixelSize = basePixelSize
  }

  render() {
    if (!this.el) {
      this.el = document.createElement('div')
      this.el.className = 'layer'

      this.canvas = document.createElement('canvas')
      this.grid = document.createElement('table')

      this.el.append(this.canvas, this.grid)
    }

    setTimeout(() => {
      this.updateCanvas()
      this.updateGrid()
    })

    return this.el
  }

  updateCanvas() {
    const layer0Rect = this.el.getBoundingClientRect()

    this.rowCount = Math.floor(layer0Rect.height / this.basePixelSize)
    this.colCount = Math.floor(layer0Rect.width / this.basePixelSize)

    this.canvas.width = colCount * this.basePixelSize
    this.canvas.height = rowCount * this.basePixelSize
  }

  updateGrid() {
    this.grid.style.setProperty('--size', this.basePixelSize + 'px')

    this.grid.innerHTML = `<tr>
      ${'<td></td>'.repeat(this.colCount)}
    </tr>`.repeat(this.rowCount)
  }
}
