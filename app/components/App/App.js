import template from './App.template.html'
import htmlToDomElement from '../../utils/htmlToDomElement'
import { EVENTS as FORM_EVENTS } from '../Form/Form'
import { EVENTS as LIST_EVENTS } from '../List/List'

class App extends HTMLElement {
  constructor () {
    super()
    this.todos = []
    this.form = undefined
    this.list = undefined
  }

  connectedCallback () {
    this.appendChild(htmlToDomElement(template))

    this.form = this.querySelector('app-form')
    this.list = this.querySelector('app-list')

    this.form.addEventListener(FORM_EVENTS.ADD, event => {
      this.addTodo(event.detail.value)
      this.form.value = ''
      this.form.focus()
    })

    this.list.addEventListener(LIST_EVENTS.DELETE, event => {
      this.deleteTodo(event.detail.index)
    })

    window.customElements.whenDefined('app-list').then(() => {
      this.list.todos = this.todos
    })
  }

  deleteTodo (index) {
    this.todos.splice(index, 1)
    this.list.todos = this.todos
  }

  addTodo (text) {
    this.todos.push({text})
    this.list.todos = this.todos
  }
}

export default App
