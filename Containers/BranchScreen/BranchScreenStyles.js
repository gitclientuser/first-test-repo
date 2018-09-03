import ScaledStyleSheet, { hairlineWidth } from 'app/Services/ScaledStylesheet'

export default ScaledStyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fafbfc',
    paddingTop: 30,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: 75,
  },

  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 15,
    paddingBottom: 5,
    maxWidth: '80%',
  },

  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    padding: 15,
    borderBottomWidth: hairlineWidth,
    borderBottomColor: '#d1d5da',
  },

  column: {
   // flexDirection: 'column',
  //  height: 75,
  },

  indicatorWrapper: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentContainer: {
    marginTop: 30,
    backgroundColor: 'white',
    width: '90%',
    height: '40%',
    borderRadius: 3,
    alignItems: 'center',
    borderWidth: hairlineWidth,
    borderColor: '#d1d5da',
  },

  branches: {
    height: '70%',
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

  contentWrapper: {
    borderTopWidth: hairlineWidth,
    borderColor: '#d1d5da',
    width: '100%',
    height: '80%',
    flex: 1,
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
    maxWidth: '80%',
  },

  text: {
    fontSize: 14,
    maxWidth: '80%',
  },

  commitName: {

  }
})
