// styles
import generalStyles from '../../components/GeneralStyles/GeneralStyles'

const style = {}

style.image = {
  border: `1px solid ${generalStyles.colors.black}`,
  display: 'block',
  margin: ' 20px auto',
  maxWidth: 320,
  width: '85%',
}

style.jumbotron = {
  backgroundImage: 'url(\'../img/gifts-hero-mobile.jpg\')',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  paddingBottom: 100,
  paddingTop: 146,
  '@media (min-width: 768px)': {
    backgroundImage: 'url(\'../img/gifts-hero.jpg\')',
    backgroundSize: 'cover',
    paddingBottom: 200,
    paddingTop: 246,
  },
  '@media (min-width: 992px)': {
    backgroundPosition: '0 -90px',
  },
}

style.mainHeader = {
  fontFamily: generalStyles.font.mainFont,
  fontSize: 50,
  fontWeight: 300,
  textAlign: 'center',
  letterSpacing: 1,
  margin: '10px 0 30px',
  '@media (min-width: 768px)': {
    fontSize: 70,
  }
}

style.registryLink = {
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
