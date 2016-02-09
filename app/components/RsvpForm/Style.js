// styles
import generalStyles from '../GeneralStyles/GeneralStyles'

const style = {}

style.input = {
  borderRadius: 0,
  fontFamily: generalStyles.font.mainFont,
  fontSize: 18,
  height: 45,
  width: '100%',
}

style.guestInput = {
  paddingRight: 12,
}

style.guestInputLabel = {
  paddingLeft: 15,
}

style.guestInputContainer = {
  fontSize: 16,
  marginBottom: 25,
  textAlign: 'left',
}

style.guestInputHeader = {
  fontSize: 20,
  marginBottom: 18,
}

style.general = {
  fontFamily: generalStyles.font.mainFont,
  textAlign: 'center',
}

style.rsvpForm = {
  marginTop: 50,
}

style.subHeader = {
  fontFamily: generalStyles.font.mainFont,
  fontSize: 20,
  fontWeight: 300,
  textAlign: 'center',
  letterSpacing: 1,
  margin: '10px 0',
  '@media (min-width: 768px)': {
    fontSize: 30,
  }
}

style.submitButton = {
  backgroundColor: generalStyles.colors.teal,
  borderTop: 'none',
  borderRight: 'none',
  borderLeft: 'none',
  borderBottom: `2px solid #429397`,
  borderRadius: 3,
  color: generalStyles.colors.white,
  fontFamily: generalStyles.font.mainFont,
  fontSize: 18,
  display: 'inline-block',
  letterSpacing: 2,
  margin: '0 auto',
  maxWidth: '100%',
  paddingBottom: 10,
  paddingLeft: 12,
  paddingRight: 12,
  paddingTop: 10,
  textAlign: 'center',
  transition: 'all 0.2s ease',
  width: 150,
}

export default style
