import template from './App.template.html'
import { EVENTS as FORM_EVENTS } from '../Form/Form'
import { EVENTS as LIST_EVENTS } from '../List/List'
import todos from '../../model/todos'

export default class App extends HTMLElement {
  connectedCallback () {
    this.innerHTML = template

    this.form = this.querySelector('app-form')
    this.list = this.querySelector('app-list')

    this.form.addEventListener(FORM_EVENTS.ADD, event => {
      todos.add(event.detail.value)
      this.form.value = ''
      this.form.focus()
    })

    this.list.addEventListener(LIST_EVENTS.DELETE, event => {
      todos.delete(event.detail.index)
    })

    window.customElements.whenDefined('app-list').then(() => {
      todos.connect((todos) => {
        this.list.todos = todos
      })
    })
  }
}
