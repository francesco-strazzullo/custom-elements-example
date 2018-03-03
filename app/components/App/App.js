import template from './App.template.html'
import htmlToDomElement from '../../utils/htmlToDomElement'
import { EVENTS as FORM_EVENTS } from '../Form/Form'
import { EVENTS as LIST_EVENTS } from '../List/List'
import todos from '../../model/todos'

class App extends HTMLElement {
  constructor () {
    super()
    this.form = undefined
    this.list = undefined
  }

  connectedCallback () {
    this.appendChild(htmlToDomElement(template))

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

export default App
