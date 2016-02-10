import React, {Component, PropTypes} from 'react'
import _ from 'lodash'
import {Alert, ButtonInput, Input} from 'react-bootstrap'
import GuestInput from './GuestInput'
import RsvpBar from '../RsvpBar/RsvpBar'
import radium from 'radium'

// styles
import style from './Style'

const getPercentage = (x, y) => {
  let percentage = (x / y) * 100
  return Math.round(percentage)
}

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
    if (this.firebaseGuestRef) {
      this.firebaseGuestRef.off()
    }
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
        const values = input.value.split('-')
        const guest = {
          name: _.startCase(values[0]),
          RSVP: (values[1] === 'true'),
        }
        checkedInputValues.push(guest)
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
        <h3 style={[style.subHeader]}>Please enter the RSVP code found in your invitation below.</h3>
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

  renderThankYouMessage = () => {
    return (
      <div>
        <h3 style={[style.subHeader]}>Thank you! We've received your RSVP.</h3>
      </div>
    )
  };

  updateFirebase = (rsvpValues) => {
    const {activeCode, activeGuest, guests} = this.state
    let activeGuestClone = _.cloneDeep(activeGuest)
    activeGuestClone[activeCode].guests = rsvpValues
    activeGuestClone[activeCode].response = true
    const guestIndex = _.findIndex(guests, activeCode)
    // Update the firebase reference
    this.firebaseGuestRef = new Firebase(`https://christopher-wedding.firebaseio.com/${guestIndex}`)
    this.firebaseGuestRef.update(activeGuestClone)
    this.setState({
      step: this.state.step + 1,
    })
  };

  render() {
    const {error, guests, step} = this.state
    let totalGuests = 0
    let awaitingReply = 0
    let attending = 0
    let notAttending = 0
    _.find(guests, (guestObj) => {
      const codeKey = _.keys(guestObj)
      totalGuests += guestObj[codeKey].guests.length
      if (!guestObj[codeKey].response) {
        awaitingReply += guestObj[codeKey].guests.length
      } else {
        _.forEach(guestObj[codeKey].guests, (guest) => {
          if (guest.RSVP) {
            attending += 1
          } else {
            notAttending += 1
          }
        })
      }
    })

    return (
      <div style={style.general}>
        {!_.isEmpty(error) && this.renderErrorMessage(error)}
        {step === 0 && this.renderRsvpCodeForm()}
        {step === 1 && this.renderGuestRsvpForm()}
        {step === 2 && this.renderThankYouMessage()}
        <RsvpBar
          attending={getPercentage(attending, totalGuests)}
          awaitingReply={getPercentage(awaitingReply, totalGuests)}
          notAttending={getPercentage(notAttending, totalGuests)}
        />
      </div>
    )
  }
}

export default radium(RsvpForm)
