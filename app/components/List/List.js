import template from './List.template.html'
import htmlToDomElement from '../../utils/htmlToDomElement'

const NO_ROW_TEMPLATE = '<div class="text-gray">Nothing to do</div>'

export const EVENTS = {
  DELETE: 'app/todo/delete'
}

class List extends HTMLElement {
  constructor () {
    super()
    this.todoList = []
  }

  connectedCallback () {
    this.render()
  }

  get todos () {
    return Object.freeze(this.todoList)
  }

  set todos (val) {
    this.todoList = [...val]
    this.render()
  }

  onDeleteClick (index) {
    this.dispatchEvent(new window.CustomEvent(EVENTS.DELETE, {
      detail: {
        index
      }
    }))
  }

  renderList () {
    this.appendChild(htmlToDomElement(template))
    const list = this.querySelector('[role="list"]')
    this.todoList.forEach((todo, index) => {
      const row = htmlToDomElement(`<app-list-row value="${todo.text}"></app-list-row>`)
      list.appendChild(row)

      row.querySelector('button').addEventListener('click', () => this.onDeleteClick(index))
    })
  }

  render () {
    this.innerHTML = ''
    if (this.todoList && this.todoList.length) {
      this.renderList()
      return
    }

    this.appendChild(htmlToDomElement(NO_ROW_TEMPLATE))
  }
}

export default List
