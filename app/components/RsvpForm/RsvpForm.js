import React, {Component, PropTypes} from 'react'
import {ButtonInput, Input} from 'react-bootstrap'
import radium from 'radium'

// styles
import style from './Style'

class RsvpForm extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  componentWillMount() {
    let guests = []
    this.firebaseRef = new Firebase('https://christopher-wedding.firebaseio.com/')
    this.firebaseRef.on('child_added', (dataSnapshot) => {
      guests.push(dataSnapshot.val());
      this.setState({
        guests: guests
      })
    })
  }

  componentWillUnmount() {
    this.firebaseRef.off()
  }

  handleSubmitRsvpCode = (e) => {
    e.preventDefault()
    console.log(this.refs.codeInput.refs.input.value)
  };

  render() {
    return (
      <div style={style.general}>
        <form ref='rsvpCodeForm' onSubmit={this.handleSubmitRsvpCode.bind(this)}>
          <Input style={style.input} ref='codeInput' type='text' placeholder='Enter code' />
          <ButtonInput style={style.submitButton} type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default radium(RsvpForm)
