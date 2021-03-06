import React, { Component } from 'react'
import { AutoLoginOrRedirect } from '../.././../state/processes/auth/login'
import { Page, Sidenav } from './styles'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import TicTacToe from './tictactoe'

class LandingPage extends Component {
  render() {
    return (
      <Router>
        <Page>
          <Sidenav>
            <ul>
              <li>
                <Link to='/landing'>Main</Link>
              </li>
              <li>
                <Link to='/landing/tictactoe'>Tic Tac Toe</Link>
              </li>
              <li>
                <Link to='/landing/contact'>Contact Us</Link>
              </li>
              <li>
                <Link to='/landing/about'>About Us</Link>
              </li>
            </ul> 
          </Sidenav>  
          <Route exact path='/landing' component={()=> <div>All Games</div>} />
          <Route exact path='/landing/tictactoe' component={TicTacToe} />
          <Route exact path='/landing/contact' component={()=> <div>Contact</div>} />
          <Route exact path='/landing/about' component={()=> <div>About</div>} />
        </Page>
      </Router>
    )
  }
}  


export default AutoLoginOrRedirect(LandingPage)
