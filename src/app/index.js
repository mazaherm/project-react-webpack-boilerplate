import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import TestComponent from '@components/TestComponent'
import '@styles/main.scss'

class App extends Component {
  render () {
    return <TestComponent />
  }
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
