import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {Link} from 'react-router'
import {Col, Row} from 'react-bootstrap'
import Jumbotron from '../../components/Jumbotron/Jumbotron'

// styles
import style from './Style'

const RadiumLink = radium(Link)

class GeneralInfo extends Component {
  render() {
    return (
      <div>
        <Jumbotron style={style.jumbotron}>
          <h1 style={[style.mainHeader]}>Amanda & Zaac</h1>
          <p style={[style.miniHeader]}>April 9, 2016 &#183; Murfreesboro, Tenn</p>
          <div style={{textAlign: 'center'}}>
            <RadiumLink to='/rsvp' style={[style.rsvp]}>
              RSVP
            </RadiumLink>
          </div>
        </Jumbotron>
        <div style={[style.whiteSection]}>
          <div className='container-fluid' style={[style.smallContainer]}>
            <h3 style={[style.whiteSectionHeader]}>
              Please join Zaac and Amanda on April 9, 2016 as we celebrate our wedding in Murfreesboro, Tennessee.
            </h3>
            <Row className='show-grid'>
              <Col xs={12} md={4}>
                <img style={[style.image]} src='../img/zaac.jpg' />
                <h5 style={[style.storyHeader]}>Zaac's Story</h5>
                <p style={[style.storyDescription]}>
                  Zaac Christopher was born in Brentwood, TN where he spent most of his life, moving to Bowling Green
                  at the age of 18 to study broadcasting at Western Kentucky University. He now works in the sports
                  arena, traveling cross-country to broadcast games for the NFL, NBA, and miscellaneous college sports.
                </p>
              </Col>
              <Col xs={12} md={4}>
                <img style={[style.image]} src='../img/amanda.jpg' />
                <h5 style={[style.storyHeader]}>Amanda's Story</h5>
                <p style={[style.storyDescription]}>
                  Amanda Thurman grew up in Louisville, KY, attending Ballard High School. She studied at WKU and worked
                  in Ireland for two months before moving to Nashville, TN to pursue a career in the tech industry.
                  Today, she works as a software engineer at TechnologyAdvice building web applications using React,
                  Redux, and Node.
                </p>
              </Col>
              <Col xs={12} md={4}>
                <img style={[style.image]} src='../img/story-of-us.jpg' />
                <h5 style={[style.storyHeader]}>Our Story</h5>
                <p style={[style.storyDescription]}>
                  We met in 2009, at a party that Zaac threw at Western Kentucky University. We hit it off immediately -
                  Amanda was easy-going and fun, Zaac was funny and "one of the nice ones". We eventually moved to
                  Nashville, TN together in 2012 and got an awesome dog. We were engaged in July 2014, and
                  now we're getting married!
                </p>
              </Col>
            </Row>
          </div>
        </div>
        <Jumbotron style={style.weddingDayJumbotron}>
          <h1 style={[style.mainHeader]}>The Wedding Day</h1>
          <p style={[style.miniHeader]}>April 9</p>
        </Jumbotron>
        <div style={[style.whiteSection]}>
          <div className='container-fluid' style={[style.smallContainer]}>
            <Row className='show-grid'>
              <Col xs={12} md={3} />
              <Col xs={12} md={6}>
                <Row className='show-grid'>
                  <Col xs={12} md={6}>
                    <h5 style={[style.storyHeader]}>Ceremony</h5>
                    <h6 style={[style.timeHeader]}>4:30 PM</h6>
                    <p style={[style.generalAddress]}>
                      The Wren's Nest<br />
                      2281 Thompson Road<br />
                      Murfreesboro, TN 37128<br />
                      615 427 8045<br />
                    </p>
                  </Col>
                  <Col xs={12} md={6}>
                    <h5 style={[style.storyHeader]}>Reception</h5>
                    <h6 style={[style.timeHeader]}>Immediately Following</h6>
                    <p style={[style.generalAddress]}>
                      The Wren's Nest<br />
                      2281 Thompson Road<br />
                      Murfreesboro, TN 37128<br />
                      615 427 8045<br />
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={3} />
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default radium(GeneralInfo)
