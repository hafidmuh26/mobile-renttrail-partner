import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#43a047',
  },
  card: {
    width: screen.width / 1.03,
  },
  view: {
    alignItems: 'center',
    paddingTop: screen.height / 150,
  },
  cardStore: {
    width: screen.width / 1.02,
    height: screen.height / 10,
    marginBottom: 1,
    alignSelf: 'center'
  },
  item: {
    paddingTop:screen.height / 30,
    borderBottomWidth: 0,
    flexWrap: 'wrap'
  },
  viewCard: {
    flexWrap: 'wrap',
  },
  image: {
    width: 390,
    height: 200,
  },
  status: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold'
  },
  statusBor: {
    fontSize: 18,
    color: '#ffd600',
    fontWeight: 'bold'
  },
  NameUser: {
    fontSize: 18,
    color: '#43a047',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold'
  },
  textTotalPrice: {
    fontWeight: 'bold'
  },
  Approve: {
    paddingTop: screen.height / 14, 
    paddingLeft: screen.width / 1.9,
    
  },
  btnAprroved: {
    backgroundColor: '#fff',
    borderRadius: 8
  },
  cardUser: {
    backgroundColor: '#f5f5f5'
  },
  nameBooking: {
    fontWeight: 'bold',
    color: '#43a047',
    shadowRadius: 1
  },
  left: {
    paddingLeft: screen.width / 40
  }, 
  cardItems: {
    borderRadius: 30,
  },

});

export default styles;
