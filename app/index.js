import './extrategy-styleguide.css'
import './style.css'
import '@webcomponents/webcomponentsjs/webcomponents-lite'
import App from './components/App/App'
import List from './components/List/List'
import ListRow from './components/ListRow/ListRow'
import Form from './components/Form/Form'

window.customElements.define('my-app', App)
window.customElements.define('app-form', Form)
window.customElements.define('app-list', List)
window.customElements.define('app-list-row', ListRow)
