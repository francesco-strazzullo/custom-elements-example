
class CustomLabel extends HTMLElement {
  static get observedAttributes () {
    return ['value']
  }

  render () {
    this.innerHTML = `<span class="text-gray">Label ${this.value}</span>`
  }

  connectedCallback () {
    this.render()
  }

  get value () {
    return this.getAttribute('value')
  }

  set value (v) {
    this.setAttribute('value', v)
  }

  attributeChangedCallback (name, oldValue, newValue) {
    this.render()
  }
}

export default CustomLabel
