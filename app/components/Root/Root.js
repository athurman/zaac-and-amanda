import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'
import {Router} from 'react-router'

class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
  };

  render() {
    return (
      <div>
        <Router history={this.props.history}>
          {this.props.routes}
        </Router>
      </div>
    )
  }
}

export default Root
