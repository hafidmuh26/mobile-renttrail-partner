import {StyleSheet, Dimensions} from 'react-native';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#43a047',
    flexDirection: 'column',
  },
  image: {
    height: '25%',
    alignItems: 'center',
  },
  textInput: {
    borderRadius: 10,
    height: screen.height / 15,
    width: screen.width / 1.45,
    borderColor: '#43a047',
    borderWidth: 1,
    color: 'black',
    paddingLeft: screen.width / 20,
    marginBottom: screen.height / 40,
    alignSelf: 'center',
  },
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: '#43a047',
    width: screen.width / 1.45,
    height: screen.height / 17,
    alignSelf: 'center',
  },
  cardForm: {
    width: screen.width / 1.19,
    height: screen.height / 2,
    borderColor: '#43a047',
    borderRadius: 10,
    marginBottom: 100,
  },
  cardView: {
    height: '65%',
    alignItems: 'center',
  },
  viewCard: {
    marginVertical: screen.height / 15,
    alignItems: 'center',
  },
  textSignin: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: screen.height / 70,
    color: 'white',
  },
  textMessage: {
    fontSize: 16,
    textAlign: 'center',
    margin: screen.width / 20,
    marginBottom: screen.height / 15,
    color: 'black',
  },
  title: {
    height: '10%',
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
  },
});

export default styles;
