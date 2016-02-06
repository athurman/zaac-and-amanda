import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {Link} from 'react-router'
import {Col, Row} from 'react-bootstrap'
import Jumbotron from '../../components/Jumbotron/Jumbotron'

// styles
import style from './Style'

class WeddingGifts extends Component {
  render() {
    return (
      <div>
        <Jumbotron style={style.jumbotron}>
          <h1 style={[style.mainHeader]}>Gifts</h1>
          <div style={{textAlign: 'center'}}>
            <a
              href='https://www.myregistry.com/wedding-registry/Amanda-Thurman-Zaac-Christopher-Nolensville-TN/941784'
              target='_blank'
              style={[style.registryLink]}
            >
              View Full Registry
            </a>
          </div>
        </Jumbotron>
        <div style={[style.whiteSection]}>
          <div className='container-fluid' style={[style.smallContainer]}>
            <h3 style={[style.whiteSectionHeader]}>
              We have registries at the following stores:
            </h3>
            <Row className='show-grid'>
              <Col xs={12} md={4}>
                <img style={[style.image]} src='../img/registry-logos/macys.jpg' />
              </Col>
              <Col xs={12} md={4}>
                <img style={[style.image]} src='../img/registry-logos/west-elm.jpg' />
              </Col>
              <Col xs={12} md={4}>
                <img style={[style.image]} src='../img/registry-logos/williams-sonoma.jpg' />
              </Col>
            </Row>
            <Row className='show-grid'>
              <Col xs={12} md={4} mdOffset={2}>
                <img style={[style.image]} src='../img/registry-logos/amazon.jpg' />
              </Col>
              <Col xs={12} md={4}>
                <img style={[style.image]} src='../img/registry-logos/kohls.jpg' />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default radium(WeddingGifts)
