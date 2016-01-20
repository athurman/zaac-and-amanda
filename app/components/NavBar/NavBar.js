import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import {Link} from 'react-router'

// styles
import style from './Style'

const RadiumLink = radium(Link)

class NavBar extends Component {
  render() {
    return (
      <Navbar style={style.navBar}>
        <Navbar.Header>
          <Navbar.Brand>
            <RadiumLink to='/' style={[style.links]}>
              A + Z
            </RadiumLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <li>
              <RadiumLink to='/' style={[style.links]}>
                Wedding
              </RadiumLink>
            </li>
            <li>
              <RadiumLink to='/location' style={[style.links]}>
                Location
              </RadiumLink>
            </li>
            <li>
              <RadiumLink to='/registry' style={[style.links]}>
                Gifts
              </RadiumLink>
            </li>
            <li>
              <RadiumLink to='/rsvp' style={[style.rsvp]}>
                RSVP
              </RadiumLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default radium(NavBar)
