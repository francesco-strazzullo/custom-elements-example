import template from './Form.template.html'
import htmlToDomElement from '../../utils/htmlToDomElement'

export const EVENTS = {
  ADD: 'app/todo/add'
}

class Form extends HTMLElement {
  constructor () {
    super()
    this.input = undefined
  }

  connectedCallback () {
    this.render()

    this
        .querySelector('button')
        .addEventListener('click', () => this.add())

    this.input = this.querySelector('input')
  }

  get value () {
    return this.input.value
  }

  set value (val) {
    this.input.value = val
  }

  focus () {
    this.input.focus()
  }

  add () {
    this.dispatchEvent(new window.CustomEvent(EVENTS.ADD, {
      detail: {
        value: this.input.value
      }
    }))
  }

  render () {
    this.innerHTML = ''
    this.appendChild(htmlToDomElement(template))
  }
}

export default Form
