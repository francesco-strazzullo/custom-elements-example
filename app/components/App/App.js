import template from './App.template.html'
import htmlToDomElement from '../../utils/htmlToDomElement'
import { DISABLE_CHANGE_EVENT } from '../CustomLabel/CustomLabel'

class App extends HTMLElement {
  connectedCallback () {
    this.appendChild(htmlToDomElement(template))

    const label = this.querySelector('custom-label')

    this
      .querySelector('button[role="toggle"]')
      .addEventListener('click', () => {
        label.toggle()
      })

    label.addEventListener(DISABLE_CHANGE_EVENT, (event) => {
      console.log(event.detail)
    })
  }
}

export default App
