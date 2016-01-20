import React, {Component, PropTypes} from 'react'

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
      <div style={{display: 'flex', flex: '1 0 0'}}>
        {children}
      </div>
    );
  }
}

export default PageLayout;
