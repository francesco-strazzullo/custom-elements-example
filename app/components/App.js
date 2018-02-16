class App extends HTMLElement {
  connectedCallback () {
    this.innerHTML = '<h1 class="text-big text-gray">App</h1>'
  }
}

export default App
