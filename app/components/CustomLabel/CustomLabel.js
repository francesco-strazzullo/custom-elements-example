class CustomLabel extends HTMLElement {
  connectedCallback () {
    const disabled = this.disabled ? 'Yes' : 'No'
    this.innerHTML = `<span class="text-gray">Am I disabled? ${disabled}</span>`
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
}

export default CustomLabel
