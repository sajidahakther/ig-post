const styles = {
  main: {
    backgroundColor: '#fff',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '0.1875rem',
    borderTopRightRadius: '0.1875rem',
    maxWidth: '58.4375rem',
    margin: '1rem auto',
    width: 'calc(100% - 2.5rem)',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'flex-start',
    height: '28.25rem',
    background: 'rgb(248, 248, 248)'
  },

  image: {
    order: '1',
    flex: '1 0 60%',
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    background: '#f8f8f8'
  },

  text: {
    order: '2',
    flex: '1 0 40%',
    alignSelf: 'flex-start',
    background: '#fff',
    height: '28.25rem',
    color: '#333'
  }
}

export default styles
