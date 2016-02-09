import React, {Component, PropTypes} from 'react'
import _ from 'lodash'
import {Alert, ButtonInput, Input} from 'react-bootstrap'
import GuestInput from './GuestInput'
import radium from 'radium'

// styles
import style from './Style'

class RsvpForm extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  state = {
    step: 0,
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
    this.firebaseGuestRef.off()
  }

  handleHideError = () => {
    this.setState({
      error: null
    })
  };

  handleSubmitGuestRsvp = (e) => {
    e.preventDefault()
    const checkedInputValues = []
    const inputValues = this.refs.rsvpGuestForm.getElementsByTagName('input')
    _.each(inputValues, (input, key) => {
      if (input.checked) {
        checkedInputValues.push(input.value)
      }
    })
    this.updateFirebase(checkedInputValues)
  };

  handleSubmitRsvpCode = (e) => {
    e.preventDefault()
    const codeInput = this.refs.codeInput.getInputDOMNode()
    const formattedCode = codeInput.value.toUpperCase().replace(/\s/g, '')
    const guestObj = _.find(this.state.guests, formattedCode)
    if (!guestObj) {
      this.setState({
        error: 'RSVP Code Not Found. Please try again.',
      })
    } else {
      this.setState({
        activeCode: formattedCode,
        activeGuest: guestObj,
        step: this.state.step + 1,
      })
    }
  };

  renderRsvpCodeForm = () => {
    return (
      <div>
        <h3 style={[style.subHeader]}>Please enter your RSVP code below.</h3>
        <form ref='rsvpCodeForm' style={[style.rsvpForm]} onSubmit={this.handleSubmitRsvpCode.bind(this)}>
          <Input style={style.input} ref='codeInput' type='text' placeholder='Enter code' />
          <ButtonInput style={style.submitButton} type='submit' value='Submit' />
        </form>
      </div>
    )
  };

  renderGuestRsvpForm = () => {
    const {activeCode, activeGuest} = this.state
    const guests = _.get(activeGuest, activeCode).guests
    const guestInputs = _.map(guests, (guest) => {
      return <GuestInput key={_.camelCase(guest.name)} guestName={guest.name} />
    })
    return (
      <form ref='rsvpGuestForm' onSubmit={this.handleSubmitGuestRsvp.bind(this)}>
        {guestInputs}
        <ButtonInput style={style.submitButton} type='submit' value='RSVP' />
      </form>
    )
  };

  renderErrorMessage = (error) => {
    return (
      <Alert className='alert-dismissable' bsStyle='danger' onDismiss={this.handleAlertDismiss}>
        <button type='button' className='close' onClick={this.handleHideError} ariaHidden='true' tabIndex='-1'>
          <span>×</span>
        </button>
        <h4>{error}</h4>
      </Alert>
    )
  };

  updateFirebase = (rsvpValues) => {
    const {activeCode, activeGuest, guests} = this.state
    let activeGuestClone = _.cloneDeep(activeGuest)
    activeGuestClone[activeCode].response = true
    const guestIndex = _.findIndex(guests, activeCode)
    // Update the firebase reference
    this.firebaseGuestRef = new Firebase(`https://christopher-wedding.firebaseio.com/${guestIndex}`)
    this.firebaseGuestRef.update(activeGuestClone)
  };

  render() {
    const {error, step} = this.state
    return (
      <div style={style.general}>
        {!_.isEmpty(error) && this.renderErrorMessage(error)}
        {step === 0 && this.renderRsvpCodeForm()}
        {step === 1 && this.renderGuestRsvpForm()}
      </div>
    )
  }
}

export default radium(RsvpForm)
