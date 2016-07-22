import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/Main'

require('./components/DynamicTable').default
exports.default = DynamicTable
/*
// Render the main component into the dom
ReactDOM.render(
  <App />,
  document.getElementById('app')
 );
*/