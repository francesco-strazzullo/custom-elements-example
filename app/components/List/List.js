import htmlToDomElement from '../../utils/htmlToDomElement'

const TEMPLATE = `
  <div>
      <ul>
      </ul>
  </div>
`

const NO_ROW_TEMPLATE = '<div class="text-gray">Nothing to do</div>'

export const EVENTS = {
  DELETE: 'app/todo/delete'
}

export default class List extends HTMLElement {
  constructor () {
    super()
    this.todoList = []
  }

  connectedCallback () {
    this.render()
  }

  renderList () {
    this.innerHTML = TEMPLATE

    const ul = this.querySelector('ul')

    this.todoList.forEach((todo, index) => {
      const row = htmlToDomElement(`<app-list-row value="${todo.text}"></app-list-row>`)
      ul.appendChild(row)
      row
        .querySelector('button')
        .addEventListener('click', () => this.onDeleteClick(index))
    })
  }

  render () {
    if (!this.todoList || !this.todoList.length) {
      this.innerHTML = NO_ROW_TEMPLATE
      return
    }

    this.renderList()
  }

  onDeleteClick (index) {
    this.dispatchEvent(new window.CustomEvent(EVENTS.DELETE, {
      detail: {
        index
      }
    }))
  }

  get todos () {
    return Object.freeze(this.todoList)
  }

  set todos (val) {
    this.todoList = [...val]
    this.render()
  }
}
