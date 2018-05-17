import template from './Form.template.html'

export const EVENTS = {
  ADD: 'app/todo/add'
}

export default class Form extends HTMLElement {
  connectedCallback () {
    this.innerHTML = template

    this
        .querySelector('button')
        .addEventListener('click', () => this.add())

    this.input = this.querySelector('input')
  }

  focus () {
    this.input.focus()
  }

  add () {
    this.dispatchEvent(new window.CustomEvent(EVENTS.ADD, {
      detail: {
        value: this.value
      }
    }))
  }

  get value () {
    return this.input.value
  }

  set value (val) {
    this.input.value = val
  }
}
