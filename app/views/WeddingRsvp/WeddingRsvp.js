import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {Link} from 'react-router'
import {Col, Row} from 'react-bootstrap'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import RsvpForm from '../../components/RsvpForm/RsvpForm'

// styles
import style from './Style'

class WeddingRsvp extends Component {
  render() {
    return (
      <div style={style.mainBackground}>
        <div className='container-fluid'>
          <h1 style={[style.mainHeader]}>RSVP</h1>
          <div style={[style.formContainer]}>
            <RsvpForm />
          </div>
        </div>
      </div>
    )
  }
}

export default radium(WeddingRsvp)
