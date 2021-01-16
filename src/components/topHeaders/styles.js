import {StyleSheet, Dimensions} from 'react-native';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  headerView:{
    backgroundColor: 'white',
    paddingRight: screen.width / 1.4,
    width: screen.width / 1,
  },
  headerLeft: {
    textAlign: 'center',
    paddingTop: screen.width / 30,
  },
  headerTitle: {
    color: '#43a047',
  },
});

export default styles;
