import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/container/App'
import RootReducer from './reducers/index'
// import lang from './reducers/lang'
// import BasicState from './types'
import registerServiceWorker from './registerServiceWorker'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import './styles/index.css'
import { HashRouter as Router, Route } from 'react-router-dom'
import LangComponent from './components/presentational/RulesComponent'

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact={true} path="/" component={App} />
        <Route path="/rules" component={LangComponent} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()