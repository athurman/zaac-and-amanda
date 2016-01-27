import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {Col, Row} from 'react-bootstrap'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import LocationMap from '../../components/LocationMap/LocationMap'

// styles
import style from './Style'

class WeddingLocation extends Component {
  render() {
    return (
      <div>
        <Jumbotron style={style.jumbotron}>
          <h1 style={[style.mainHeader]}>Travel</h1>
          <p style={[style.miniHeader]}>Murfreesboro, Tennessee</p>
        </Jumbotron>
                <div style={[style.whiteSection]}>
          <div className='container-fluid' style={[style.smallContainer]}>
            <h3 style={[style.whiteSectionHeader]}>
              Directions
            </h3>
            <Row className='show-grid'>
              <Col xs={12} md={12}>
                <h5 style={[style.storyHeader]}>The Wren's Nest</h5>
                <p style={[style.storyDescription]}>
                  The Wren’s Nest is located 38 minutes southeast of <br />Nashville in Murfreesboro, TN
                </p>
                <p style={[style.storyDescription]}>
                  From Downtown Murfreesboro, Take Old Fort Parkway toward WalMart, and turn left on
                  Highway 99 (New Salem Highway) next to Thorton’s Fuel Center.  Go approximately 8 miles.
                  Just past the Publix and McDonalds there is a white Phillips 66 gas station.
                  Turn just before it onto Armstrong Valley.  Go 1.6 miles and turn right onto Thompson Road.
                  Travel .9 miles, and the Wren’s Nest is on the left at 2281 Thompson Road.
                </p>
              </Col>
            </Row>
            <Row className='show-grid'>
              <Col xs={12} md={12} style={{height: 400}}>
                <LocationMap />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default radium(WeddingLocation)
