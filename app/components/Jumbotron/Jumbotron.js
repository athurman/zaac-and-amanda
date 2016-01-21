import React, {Component, PropTypes} from 'react'
import radium from 'radium'

class Jumbotron extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
  };

  static defaultProps = {
    style: {
      padding: '50px 0',
      backgroundColor: '#000',
    },
  };

  render() {
    const {children, style} = this.props
    return (
      <div style={[style]}>
        <div className='container-fluid'>
          {children}
        </div>
      </div>
    )
  }
}

export default radium(Jumbotron)
