import template from './ListRow.template.html'

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
    this.innerHTML = template
    this.querySelector('[role="row-text"]').innerText = this.value
  }
}

export default ListRow
