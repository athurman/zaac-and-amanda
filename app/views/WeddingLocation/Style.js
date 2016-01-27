// styles
import generalStyles from '../../components/GeneralStyles/GeneralStyles'

const style = {}

style.jumbotron = {
  backgroundImage: 'url(\'../img/location-bg.jpg\')',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  paddingBottom: 200,
  paddingTop: 246,
}

style.mainHeader = {
  fontFamily: generalStyles.font.mainFont,
  fontSize: 70,
  fontWeight: 300,
  textAlign: 'center',
  letterSpacing: 1,
  margin: '10px 0',
}

style.miniHeader = {
  color: 'rgba(255,255,255,0.6)',
  fontFamily: generalStyles.font.mainFont,
  fontSize: 18,
  fontWeight: 300,
  textAlign: 'center',
  letterSpacing: 1,
  marginBottom: 25,
}

style.smallContainer = {
  maxWidth: 520,
}

style.storyHeader = {
  color: generalStyles.colors.black,
  fontFamily: generalStyles.font.mainFont,
  fontSize: 18,
  fontWeight: 600,
  textAlign: 'center',
}

style.storyDescription = {
  color: generalStyles.colors.black,
  fontFamily: generalStyles.font.mainFont,
  fontSize: 15,
  fontWeight: 300,
  lineHeight: '1.6em',
  textAlign: 'center',
}

style.whiteSection = {
  backgroundColor: generalStyles.colors.trueWhite,
  padding: '100px 0',
}

style.whiteSectionHeader = {
  color: generalStyles.colors.black,
  fontFamily: generalStyles.font.mainFont,
  fontSize: 32,
  fontWeight: 300,
  lineHeight: '1.5em',
  marginBottom: 45,
  textAlign: 'center',
}

export default style
