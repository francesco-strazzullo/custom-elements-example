import template from './App.template.html'
import htmlToDomElement from '../../utils/htmlToDomElement'

class App extends HTMLElement {
  connectedCallback () {
    this.appendChild(htmlToDomElement(template))
  }
}

export default App
