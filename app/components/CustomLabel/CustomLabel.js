class CustomLabel extends HTMLElement {
  static get observedAttributes () {
    return ['disabled']
  }

  render () {
    const disabled = this.disabled ? 'Yes' : 'No'
    this.innerHTML = `<span class="text-gray">Am I disabled? ${disabled}</span>`
  }

  connectedCallback () {
    this.render()
  }

  get disabled () {
    return this.hasAttribute('disabled')
  }

  set disabled (newDisabled) {
    if (newDisabled) {
      this.setAttribute('disabled', '')
    } else {
      this.removeAttribute('disabled')
    }
  }

  toggle () {
    this.disabled = !this.disabled
  }

  attributeChangedCallback (name, oldValue, newValue) {
    this.render()
  }
}

export default CustomLabel
