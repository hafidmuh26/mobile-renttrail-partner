import React, { Component, useReducer } from 'react';
import { View } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Right,
  Text,
} from 'native-base';
import { findAll, rentById } from '../../../actions/rents';
import { connect } from 'react-redux';
import { showError } from '../../../utils/toast';
import styles from '../styles';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


function ViewBooking({ item, navigation }) {

  return (
    <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => navigation.navigate('BookingDetail',{id: item?.id})}>
      <View>
        <Card style={styles.cardBooking}>
          <CardItem>
            <Body>
              <Text style={styles.nameBooking}>{item.user.name}</Text>
              <Text style={styles.addressBooking}>{item.user.address}</Text>
              <Text note style={styles.dateBooking}>Date Rent</Text>
              <Text note style={styles.dateBooking}>{item.dateStart} - {item.dateEnd}</Text>
            </Body>
            <Right>
              <Text style={styles.status}>{item.status}</Text>
            </Right>
          </CardItem>
        </Card>
      </View>
    </TouchableOpacity>
  );
}

class BookingScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [{
        id: '',
        totalPrice: '',
        dateStart: '',
        dateEnd: '',
        status: '',
        user: {},
        item: {}
      }],
      params: {
        status:'BOOKED',
        search: '',
        sort: 'asc',
        page: 0,
        size: 10
      }
    }
  }

  componentDidMount() {
    this.reload(this.state.params);
  }

  componentDidUpdate(prevProps, prevState) {
    const { data, error, dataRent } = this.props;

    if (prevProps.data !== data) {
      this.setState({ 
        data: [...data?.list],
        params: {
          ...this.state.params,
          status: data?.status
        }
      });
    } else if (error && prevProps.error !== error) {
      showError(error);
    }
  }

  reload({  search, sort = 'asc', page = 0, status } = {}) {
    this.props.findAll({  search, sort, page, status: 'BOOKED' });
  }

  render() {
    const { navigation } = this.props;
    const { data } = this.state;

    return (
      <Content>
        <Container style={styles.container}>

          <View style={styles.view}>
            <View style={{ paddingLeft: 10, paddingTop: 10, paddingBottom: 15, flexDirection: 'row' }}>
              <ScrollView vertical={true}>
                {data.map((data, index) => {
                  return (
                    <ViewBooking
                      key={index}
                      item={data}
                      navigation={navigation}
                    />
                  )
                })}
              </ScrollView>
            </View>
          </View>
        </Container>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  data: state.rents.data,
  loading: state.rents.loading,
  error: state.rents.error,

});

const mapDispatchToProps = {
  findAll, rentById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookingScreen);
