import React, { Component } from 'react'
import { AutoLoginOrRedirect } from '../.././../state/processes/auth/login'
import { Page } from './styles'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'


// const routes = [
//   { id: 0, path: "/landing", exact: true, main: () => <div>Welcome!</div> },
//   { id: 1, path: "/landing/tic-tac-toe", exact: false, main: () => <div>Tic-Tac-Toe</div>},
//   { id: 2, path: "/landing/contact-us", exact: false, main: () => <div>Contact Us</div>},
//   { id: 3, path: "/landing/about-us", exact: false, main: () => <div>About Us</div>}
// ];

class LandingPage extends Component {
  render() {
    return (
      <Router>
        <Page>
            <ul>
              <li>
                <Link to="/landing">Main</Link>
              </li>
              <li>
                <Link to="/landing/tic-tac-toe">Tic Tac Toe</Link>
              </li>
              <li>
                <Link to="/landing/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/landing/about-us">About Us</Link>
              </li>
            </ul> 
          <Route exact path='/landing' component={()=> <div>All Games</div>} />
          <Route exact path='/landing/games' component={()=> <div>TicTacToe</div>} />
          <Route exact path='/landing/contact' component={()=> <div>Contact</div>} />
          <Route exact path='/landing/about' component={()=> <div>About</div>} />
        </Page>
      </Router>
    )
  }
}

export default AutoLoginOrRedirect(LandingPage)
