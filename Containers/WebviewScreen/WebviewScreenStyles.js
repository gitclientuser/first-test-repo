import { StyleSheet } from 'react-native'
import { Metrics, Colors, ApplicationStyles } from 'app/Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  webview: {
    flex: 1,
    width: '100%',
    height: Metrics.screenHeight - Metrics.verticalScale(71),
    backgroundColor: Colors.fontCloud,
  },
})
