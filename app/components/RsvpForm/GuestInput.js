import React, {Component, PropTypes} from 'react'
import _ from 'lodash'
import {Input} from 'react-bootstrap'
import radium from 'radium'

// styles
import style from './Style'

class GuestInput extends Component {
  static propTypes = {
    guestName: PropTypes.string.isRequired,
  };

  state = {
    rsvp: true,
  };

  handleChange = (e) => {
    this.setState({
      rsvp: !this.state.rsvp
    })
  };

  render() {
    const {guestName} = this.props

    return (
      <div style={[style.guestInputContainer]}>
        <h4 style={[style.guestInputHeader]}>{guestName}</h4>
        <Input
          type='radio'
          label={<span style={style.guestInputLabel}>Wouldn't miss it for the world</span>}
          value={`${_.camelCase(guestName)}-true`}
          style={style.guestInput}
          onChange={this.handleChange}
          checked={this.state.rsvp}
        />
        <Input
          type='radio'
          label={<span style={style.guestInputLabel}>Will be there in spirit</span>}
          value={`${_.camelCase(guestName)}-false`}
          style={style.guestInput}
          onChange={this.handleChange}
          checked={!this.state.rsvp}
        />
        <hr />
      </div>
    )
  }
}

export default radium(GuestInput)
