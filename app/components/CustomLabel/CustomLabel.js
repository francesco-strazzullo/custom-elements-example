export const DISABLE_CHANGE_EVENT = 'disableChange'

const onDisabledChange = customLabel => {
  const event = new window.CustomEvent(DISABLE_CHANGE_EVENT, {
    detail: {
      disabled: customLabel.disabled,
      timestamp: (new Date()).getTime()
    }
  })

  customLabel.dispatchEvent(event)
}

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
    if (name === 'disabled') {
      onDisabledChange(this)
    }
  }
}

export default CustomLabel
