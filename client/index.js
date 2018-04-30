import React from 'react'
import {render} from 'react-dom'
import Router from 'react-router-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <App />,
    document.getElementById('app')
  )
})
