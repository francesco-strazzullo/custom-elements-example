import template from './App.template.html'
import htmlToDomElement from '../../utils/htmlToDomElement'

class App extends HTMLElement {
  connectedCallback () {
    this.appendChild(htmlToDomElement(template))

    const label = this.querySelector('custom-label')
    label.value = 0
    this.interval = window.setInterval(() => {
      label.value++
    }, 1000)
  }

  disconnectedCallback () {
    window.clearInterval(this.interval)
  }
}

export default App
