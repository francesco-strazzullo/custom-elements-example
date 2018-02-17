class CustomLabel extends HTMLElement {
  connectedCallback () {
    const disabled = this.hasAttribute('disabled') ? 'Yes' : 'No'
    this.innerHTML = `<span class="text-gray">Am I disabled? ${disabled}</span>`
  }
}

export default CustomLabel
