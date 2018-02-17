import closest from '../../utils/closest'
class CustomLabel extends HTMLElement {
  static get observedAttributes () {
    return ['value']
  }

  render () {
    this.innerHTML = `<span class="text-gray">Label ${this.value}</span>`
  }

  connectedCallback () {
    this.render()
    if (this.hasAttribute('bind-value')) {
      const bindValue = this.getAttribute('bind-value')

      const selector = bindValue.split('.')[0]
      const eventName = bindValue.split('.')[1]

      const target = closest(this, selector)

      target.addEventListener(eventName, (e) => {
        this.value = e.detail.value
      })
    }
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
