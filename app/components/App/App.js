import template from './App.template.html'
import htmlToDomElement from '../../utils/htmlToDomElement'

const bindAttributeToEvents = app => {
  const bindable = Array.from(app.querySelectorAll('[bind-attribute]'))
  bindable.forEach(element => {
    const [ attribute, eventName ] = element.getAttribute('bind-attribute').split(':')
    app.addEventListener(eventName, event => {
      element[attribute] = event.detail.value
    })
  })
}

class App extends HTMLElement {
  connectedCallback () {
    this.appendChild(htmlToDomElement(template))

    bindAttributeToEvents(this)

    this
      .querySelector('input')
      .addEventListener('input', event => {
        this.onLabelChange(event.target.value)
      })

    this
      .querySelector('button')
      .addEventListener('click', () => {
        this.onLabelChange('Dummy')
      })
  }

  onLabelChange (value) {
    this.label = value
    const event = new window.CustomEvent('counterChange', {
      detail: {
        value: value,
        timestamp: (new Date()).getTime()
      }
    })

    this.dispatchEvent(event)
  }
}

export default App
