import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import Chai from './Chai.jsx'
const anotherElement = (
  <a href="www.google.com" target='_blank'>Visit Google</a>
)
const reactElement = React.createElement(
  'a',
  {href : "https://youtube.com",target : "_blank"},
  'click me to visit youtube'
)
createRoot(document.getElementById('root')).render(
  // reactElement
  <App/>
)
