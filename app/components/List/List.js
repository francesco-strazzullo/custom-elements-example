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
  static get observedAttributes () {
    return ['todos']
  }

  attributeChangedCallback () {
    this.render()
  }

  renderList () {
    this.innerHTML = TEMPLATE

    const ul = this.querySelector('ul')

    this.todos.forEach((todo, index) => {
      const row = htmlToDomElement(`<app-list-row value="${todo.text}"></app-list-row>`)
      ul.appendChild(row)
      row
        .querySelector('button')
        .addEventListener('click', () => this.onDeleteClick(index))
    })
  }

  render () {
    if (!this.todos.length) {
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
    if (!this.hasAttribute('todos')) {
      return []
    }

    return JSON.parse(this.getAttribute('todos'))
  }

  set todos (val) {
    this.setAttribute('todos', JSON.stringify(val))
  }
}
