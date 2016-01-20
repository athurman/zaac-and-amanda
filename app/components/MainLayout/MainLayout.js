import React, {Component, PropTypes} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {Link} from 'react-router';

class PageLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
    history: PropTypes.any,
    location: PropTypes.object,
    params: PropTypes.any,
  };

  render() {
    const {children} = this.props;
    return (
      <div style={{width: '100%'}}>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>
                A + Z
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <li>
                <Link to='/'>
                  Wedding
                </Link>
              </li>
              <li>
                <Link to='/location'>
                  Location
                </Link>
              </li>
              <li>
                <Link to='/registry'>
                  Gifts
                </Link>
              </li>
              <li>
                <Link to='/rsvp'>
                  RSVP
                </Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {children}
      </div>
    );
  }
}

export default PageLayout;
