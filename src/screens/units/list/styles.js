import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  buttonSearch: {
    marginTop: 7,
    borderRadius: 30,
    paddingLeft: 20,
  },
  unit: {
    backgroundColor: "#fff",
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    height: 80
  },
  hiddenUnit: {
    padding: 10,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: "flex-end",
  },
  deleteButton: {
    backgroundColor: '#00B0FF',
    borderRadius: 15,
  },
  iconHome: {
    backgroundColor: "#64dd17",
    borderRadius: 15,
  }

});

export default styles;
