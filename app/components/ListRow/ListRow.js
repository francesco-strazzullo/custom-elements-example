import template from './ListRow.template.html'
import htmlToDomElement from '../../utils/htmlToDomElement'

class ListRow extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  get value () {
    return this.getAttribute('value')
  }

  set value (val) {
    this.setAttribute('value', val)
  }

  render () {
    this.innerHTML = ''
    this.appendChild(htmlToDomElement(template))
    this.querySelector('[role="row-text"]').innerText = this.value
  }
}

export default ListRow
