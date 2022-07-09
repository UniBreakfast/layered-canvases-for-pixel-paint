export { ButtonBar }

class ButtonBar {
  constructor(count) {
    this.count = count
  }

  render() {
    if (!this.el) {
      this.el = document.createElement('div')
      this.el.className = 'btns'

      for (let i = 0; i < this.count; i++) {
        this.el.innerHTML += `<button>${i}</button>`
      }
    }

    return this.el
  }
}
