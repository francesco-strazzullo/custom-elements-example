import template from './App.template.html'
import htmlToDomElement from '../../utils/htmlToDomElement'

const onCounterChange = app => {
  const event = new window.CustomEvent('counterChange', {
    detail: {
      value: app.counter,
      timestamp: (new Date()).getTime()
    }
  })

  app.dispatchEvent(event)
}

class App extends HTMLElement {
  connectedCallback () {
    this.appendChild(htmlToDomElement(template))

    window.customElements.whenDefined('custom-label').then(() => {
      this.counter = 0
      onCounterChange(this)
      this.interval = window.setInterval(() => {
        this.counter++
        onCounterChange(this)
      }, 1000)
    })

    this
      .querySelector('button')
      .addEventListener('click', () => {
        window.clearInterval(this.interval)
        this.counter = 1000
        onCounterChange(this)
      })
  }

  disconnectedCallback () {
    window.clearInterval(this.interval)
  }
}

export default App
