import React, {Component, PropTypes} from 'react'
import radium from 'radium'

// styles
import style from './Style'

class RsvpBar extends Component {
  static propTypes = {
    attending: PropTypes.number,
    awaitingReply: PropTypes.number,
    notAttending: PropTypes.number,
  };

  static defaultProps = {
    attending: 0,
    awaitingReply: 100,
    notAttending: 0,
  };

  render() {
    const {attending, awaitingReply, notAttending} = this.props

    return (
      <div style={[style.rsvpBarContainer]}>
        <div style={{
            backgroundColor: '#FAF7E1',
            float: 'left',
            height: 20,
            marginBottom: 20,
            width: `${attending}%`
          }}
        />
        <div style={{
            backgroundColor: '#3D9673',
            float: 'left',
            height: 20,
            marginBottom: 20,
            width: `${notAttending}%`
          }}
        />
        <div style={{
            backgroundColor: '#337D60',
            float: 'left',
            height: 20,
            marginBottom: 20,
            width: `${awaitingReply}%`
          }}
        />
        <div style={[style.clear]} />
        <div style={[style.keyContainer]}>
          <div style={{
              backgroundColor: '#FAF7E1',
              float: 'left',
              height: 10,
              marginRight: 8,
              marginTop: 3,
              width: 10
            }}
          />
          <span style={[style.key]}>Attending</span>
          <div style={{
              backgroundColor: '#3D9673',
              float: 'left',
              height: 10,
              marginLeft: 12,
              marginRight: 8,
              marginTop: 3,
              width: 10,
            }}
          />
          <span style={[style.key]}>Not Attending</span>
          <div style={{
              backgroundColor: '#337D60',
              float: 'left',
              height: 10,
              marginLeft: 12,
              marginRight: 8,
              marginTop: 3,
              width: 10,
            }}
          />
          <span style={[style.key]}>Awaiting Reply</span>
        </div>
      </div>
    )
  }
}

export default radium(RsvpBar)
