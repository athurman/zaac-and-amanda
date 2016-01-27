import React, {Component, PropTypes} from 'react'
import radium, {StyleRoot} from 'radium'
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
      <StyleRoot>
        <div style={[generalStyles.site]}>
          <NavBar />
          {children}
        </div>
      </StyleRoot>
    )
  }
}

export default radium(PageLayout)
