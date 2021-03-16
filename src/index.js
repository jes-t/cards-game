import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import './index.css'

const WrapedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<WrapedApp />, document.getElementById('root'))
