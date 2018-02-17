import template from './App.template.html'
import htmlToDomElement from '../../utils/htmlToDomElement'

class App extends HTMLElement {
  connectedCallback () {
    this.appendChild(htmlToDomElement(template))

    this
      .querySelector('button[role="toggle"]')
      .addEventListener('click', () => {
        const firstLabel = document.getElementById('first')
        const secondLabel = document.getElementById('second')
        const thirdLabel = document.getElementById('third')

        firstLabel.disabled = !firstLabel.disabled

        if (secondLabel.hasAttribute('disabled')) {
          secondLabel.removeAttribute('disabled')
        } else {
          secondLabel.setAttribute('disabled', '')
        }

        thirdLabel.toggle()
      })
  }
}

export default App
