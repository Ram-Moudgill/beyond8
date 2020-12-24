import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <div className='conatiner-fluid m-0 p-0'>
        <Navbar brand={'Beyond 8.'}></Navbar>
        <main>
          <Switch>
            <Route exact path='/' component={Main} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
