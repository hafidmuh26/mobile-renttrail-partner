import {StyleSheet, Dimensions} from 'react-native';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#43a047',
  },
  image: {
    height: '25%',
    alignItems: 'center',
  },
  textInput: {
    borderRadius: 10,
    height: screen.height / 16,
    borderColor: '#43a047',
    borderWidth: 1,
    color: 'black',
    paddingLeft: 20,
    paddingRight: 10,
    marginBottom: 10,
    width: 250,
    alignSelf: 'center',
  },
  cardForm: {
    width: screen.width / 1.2,
    height: screen.height / 2.2,
    borderColor: '#43a047',
    borderRadius: 10,
    
  },
  buttonStyles:{
    backgroundColor:'#fff',
    width: screen.width / 1.8,
    alignSelf:'center',
    borderRadius:10,

  },
  viewCard: {
    marginVertical: 30,
    alignItems: 'center',
  },
  viewForm: {
    height: '55%',
    alignItems: 'center',
  },
  viewBottom: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: screen.width / 6.5,
  },
  textSignin: {
    fontSize: 16,
    textAlign: 'center',
    margin: 12,
    color: '#43a047',
  },
  textLogin: {
    flexDirection: 'row',
    color: '#43a047',
  },
  instructions: {
    textAlign: 'center',
    color: '#00B0FF',
    marginBottom: 5,
    marginTop: 15,
  },
  title: {
    height: '7%',
    textAlign: 'center',
    color: 'white',
    fontSize: 27,
    fontFamily: 'sans-serif-condensed',
  },
  titlePwd: {
    textAlign: 'center',
    color: '#43a047',
    fontSize: 20,
    fontFamily: 'sans-serif-condensed',
    marginBottom: 20,
  },
  view:{
    alignSelf:'center'
  },

});

export default styles;
