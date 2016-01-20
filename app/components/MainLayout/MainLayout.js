import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import NavBar from '../NavBar/NavBar'

// styles
import generalStyles from '../GeneralStyles/GeneralStyles'

class PageLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
    history: PropTypes.any,
    location: PropTypes.object,
    params: PropTypes.any,
  };

  render() {
    const {children} = this.props
    return (
      <div style={[generalStyles.site]}>
        <NavBar />
        {children}
      </div>
    )
  }
}

export default radium(PageLayout)
