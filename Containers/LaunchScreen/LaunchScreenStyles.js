import { Metrics, Fonts, Colors } from 'app/Themes'
import ScaledStyleSheet, { hairlineWidth } from 'app/Services/ScaledStylesheet'

export default ScaledStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fafbfc',
  },

  logo: {
    height: 40,
    marginTop: 50,
    marginBottom: 15,
  },

  name: {
    height: 40,
  },

  formContainer: {
    marginTop: 80,
    backgroundColor: 'white',
    width: '90%',
    height: 350,
    borderRadius: 3,
    alignItems: 'center',
    borderWidth: hairlineWidth,
    borderColor: '#d1d5da',
  },

  header: {
    fontSize: 16,
    width: '100%',
    lineHeight: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#24292e',
    backgroundColor: '#f6f8fa',
  },

  inputsContainer: {
    borderTopWidth: hairlineWidth,
    borderColor: '#d1d5da',
    width: '100%',
    flex: 1,
  }
})
