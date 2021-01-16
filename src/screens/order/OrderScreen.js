import React, {Component} from 'react';
import {Container, Content, Text} from 'native-base';
import {TopHeader} from '../../components/topHeaders';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {BookingScreen, BorrowedScreen} from '../order';

const Tab = createMaterialTopTabNavigator();

class OrderScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Content>
          <TopHeader title="ORDER" />
          <Text
            style={{borderTopWidth: 1, borderColor: '#43a047', fontSize: 0}}
          />
          <Tab.Navigator
            tabBarOptions={{activeTintColor: '#43a047', pressColor: '#43a047', indicatorStyle: 'red'}}>
            <Tab.Screen name="Booking" component={BookingScreen} />
            <Tab.Screen name="Borrowed" component={BorrowedScreen} />
          </Tab.Navigator>
        </Content>
      </Container>
    );
  }
}

export default OrderScreen;
