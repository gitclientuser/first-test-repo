import { Fonts, Colors } from 'app/Themes'
import ScaledStyleSheet from 'app/Services/ScaledStylesheet'

export default ScaledStyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.transparent,
  },

  mask: {
    flex: 1,
    top: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: Colors.coal,
  },

  bottomContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.actionSheetBg,
    height: 64,
  },

  image: {
    marginLeft: 21,
  },

  text: {
    ...Fonts.type.book,
    color: Colors.coal,
    opacity: 0.87,
    fontSize_H: 16,
    marginLeft: 37,
  },
})
