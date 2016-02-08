// styles
import generalStyles from '../../components/GeneralStyles/GeneralStyles'

const style = {}

style.mainBackground = {
  backgroundImage: 'url(\'../img/rsvp-bg-mobile.jpg\')',
  backgroundSize: 'cover',
  height: '100vh',
  backgroundRepeat: 'no-repeat',
  paddingBottom: 100,
  paddingTop: 100,
  '@media (min-width: 768px)': {
    backgroundImage: 'url(\'../img/rsvp-bg.jpg\')',
    backgroundSize: 'cover',
    paddingBottom: 200,
  },
}

style.mainHeader = {
  fontFamily: generalStyles.font.mainFont,
  fontSize: 50,
  fontWeight: 300,
  textAlign: 'center',
  letterSpacing: 1,
  margin: '10px 0',
  '@media (min-width: 768px)': {
    fontSize: 70,
  }
}

style.subHeader = {
  fontFamily: generalStyles.font.mainFont,
  fontSize: 25,
  fontWeight: 300,
  textAlign: 'center',
  letterSpacing: 1,
  margin: '10px 0 50px',
  '@media (min-width: 768px)': {
    fontSize: 35,
  }
}

style.formContainer = {
  width: '100%',
  maxWidth: 525,
  margin: '0px auto',
  padding: '30px 0',
}

export default style
