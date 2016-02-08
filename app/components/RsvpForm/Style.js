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

style.general = {
  textAlign: 'center',
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
