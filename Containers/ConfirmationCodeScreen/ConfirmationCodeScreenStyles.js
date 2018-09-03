import { Metrics, Fonts, Colors } from 'app/Themes'
import ScaledStyleSheet from 'app/Services/ScaledStylesheet'

export default ScaledStyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.snow,
  },

  inputWrapper: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    marginTop: Metrics.isAndroid ? 96 : 116,
  },

  androidInputWrapper: {
    minHeight: 200,
  },

  iosWrapper: {
    height: '100%',
    flex: 1,
  },

  subtitle: {
    ...Fonts.style.titleThin,
    color: Colors.aubergine,
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: 9,
    opacity: 0.7,
    lineHeight: 24,
  },

  bottomTextWrapper: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },

  bottomText: {
    ...Fonts.style.medium,
    color: Colors.blueDark,
  },

  decorate: {
    ...Fonts.type.base,
    textDecorationLine: 'underline',
  },

  indicator: {
    position: 'absolute',
    top: '50%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
