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

    window.customElements.whenDefined('app-list-row').then(() => {
      this.todos.forEach((todo, index) => {
        const row = htmlToDomElement(`<app-list-row value="${todo}"></app-list-row>`)
        ul.appendChild(row)
        row
          .querySelector('button')
          .addEventListener('click', () => this.onDeleteClick(index))
      })
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
    if (!this.getAttribute('todos')) {
      return []
    }

    return this.getAttribute('todos').split(',')
  }

  set todos (val) {
    const todos = Array.from(val || [])
    this.setAttribute('todos', todos.join(','))
  }
}
