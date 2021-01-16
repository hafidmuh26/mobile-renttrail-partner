import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#43a047',
    flexDirection: 'column'
  },
  image: {
    width: 180,
    height: 160,
  },
  textInput: {
    borderRadius: 10,
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    color: 'black',
    paddingLeft: 20,
    paddingRight: 10,
    marginBottom: 10,
    width: 300
  },
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    width: 300
  },
  buttonGoogle: {
    borderRadius: 10,
    backgroundColor: '#fff',
    width:'70%',
    paddingLeft:20,
    paddingRight:20,
  },
  textSignin: {
    fontSize: 16,
    textAlign: 'center',
    margin: 12,
    color: '#43a047'
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
    marginTop: 15
  },
  title: {
    textAlign: 'center',
    marginBottom:100,
    color: '#fff',
    fontSize: 27,
    fontFamily: "sans-serif-condensed"
  },
});

export default styles;
