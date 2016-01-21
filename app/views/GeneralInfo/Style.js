// styles
import generalStyles from '../../components/GeneralStyles/GeneralStyles'

const style = {}

style.image = {
  display: 'block',
  margin: ' 20px auto',
  maxWidth: 320,
  width: '100%',
}

style.jumbotron = {
  background: 'url(../img/general-info-bg.jpg) no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: '0px -90px',
  padding: '246px 0 200px',
}

style.generalAddress = {
  color: generalStyles.colors.black,
  fontFamily: generalStyles.font.mainFont,
  fontWeight: 600,
  lineHeight: '1.5em',
  textAlign: 'center',
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

style.rsvp = {
  backgroundColor: generalStyles.colors.teal,
  borderBottom: `2px solid #429397`,
  borderRadius: 3,
  color: generalStyles.colors.white,
  display: 'inline-block',
  letterSpacing: 5,
  margin: '0 auto',
  paddingBottom: 10,
  paddingLeft: 15,
  paddingRight: 15,
  paddingTop: 10,
  textAlign: 'center',
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: generalStyles.colors.tealHover,
    textDecoration: 'none',
  }
}

style.smallContainer = {
  maxWidth: 1020,
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

style.timeHeader = {
  color: generalStyles.colors.teal,
  fontFamily: generalStyles.font.mainFont,
  fontWeight: 600,
  letterSpacing: 1,
  lineHeight: '1.5em',
  textAlign: 'center',
}

style.weddingDayJumbotron = {
  background: 'url(../img/engagement.jpg) no-repeat',
  backgroundSize: 'cover',
  padding: '150px 0',
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
