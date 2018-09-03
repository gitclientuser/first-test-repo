import ScaledStyleSheet, { hairlineWidth } from 'app/Services/ScaledStylesheet'

export default ScaledStyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fafbfc',
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

  overview: {
    height: '20%',
  },

  fit: {
    height: '77%',
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
    flex: 1,
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
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

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  stars: {
    marginRight: 3,
  },

  repoName: {
    fontSize: 16,
    fontWeight: '600',
    maxWidth: '80%',
  },

  column: {
    margin: 10,
    flex: 1,
    justifyContent: 'space-between'
  },

  separator: {
    height: '100%',
    width: hairlineWidth,
    backgroundColor: '#d1d5da',
  },

  defaultText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 30,
  },

  indicatorWrapper: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    backgroundColor: 'white',
  },

  searchWrapper: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    marginTop: 35,
    borderColor: 'orange',
  },

  userName: {
    color: 'black',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
