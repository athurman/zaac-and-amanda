// styles
import generalStyles from '../GeneralStyles/GeneralStyles'
console.log(generalStyles)
const style = {}

style.navBar = {
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: 0,
  paddingTop: 20,
}

style.links = {
  borderBottom: '1px solid transparent',
  color: generalStyles.colors.teal,
  fontFamily: generalStyles.font.mainFont,
  marginLeft: 5,
  marginRight: 5,
  paddingBottom: 12,
  paddingTop: 12,
  transition: 'all 0.2s ease',
  ':hover': {
    borderBottom: `1px solid ${generalStyles.colors.teal}`,
  },
}

style.rsvp = {
  border: `2px solid ${generalStyles.colors.white}`,
  borderRadius: 3,
  color: generalStyles.colors.white,
  letterSpacing: 5,
  marginLeft: 12,
  paddingBottom: 10,
  paddingTop: 10,
  transition: 'all 0.2s ease',
  ':hover': {
    borderColor: generalStyles.colors.whiteHover,
    color: generalStyles.colors.whiteHover,
  }
}

export default style
