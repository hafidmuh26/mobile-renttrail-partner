import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabBarLabel: {
    paddingBottom: 6,
    fontSize: 10,
    textAlign: 'center'
  },
  tabBarLabelActive: {
    color: '#43a047'
  },
  icon: {
    backgroundColor: 'transparent',
    color: '#616161',
    fontSize: 18
  },
  buttonText: {
    backgroundColor: 'transparent',
    color: '#fff1cf',
    paddingTop: 4,
    fontSize: 12,
    fontFamily: 'roboto-regular'
  },
  activeIcon: {
    color: '#43a047'
  },
  activeButtonText: {
    color: '#43a047'
  }
});

export default styles;
