import React, { Component } from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Button,
  Icon,
  Body,
  Right,
  Text,
  Left,
} from 'native-base';
import { CommonHeader } from '../../components/CommonHeader';
import { View } from 'react-native';
import styles from './styles';
import { findAll, findById } from '../../actions/transactions';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


function ViewTransaction({ item, navigation }) {
  return (
    <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => navigation.navigate('TransactionDetail', { id: item?.id })}>
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
              <Text style={styles.statusBor}>{item.status}</Text>
            </Right>
          </CardItem>
        </Card>
      </View>
    </TouchableOpacity>
  );
}

class TransactionScreen extends Component {

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
        status: 'DONE',
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
    const { data, error, navigation } = this.props;

    if (prevProps.data !== data) {
      this.setState({
        data: [...data?.list],
        params: {
          ...this.state.params,
          status: data?.status
        }
      });
      console.log(data);
      
    } else if (error && prevProps.error !== error) {
      showError(error);
    }
  }

  reload({ search, sort = 'asc', page = 0, status } = {}) {
    this.props.findAll({ search: { name: search }, sort, page, status: 'DONE' });
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
                    <ViewTransaction
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
  data: state.transactions.data,
  loading: state.transactions.loading,
  error: state.transactions.error,
});

const mapDispatchToProps = {
  findAll, findById
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionScreen)
