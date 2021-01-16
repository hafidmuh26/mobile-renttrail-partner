import React, {Component} from 'react';
import {Container, Content} from 'native-base';
import {TopHeader} from '../../components/topHeaders';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {BookingScreen, BorrowedScreen} from '../order';

const Tab = createMaterialTopTabNavigator();

class ExploreScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
      <TopHeader title="ORDER" />
          <Tab.Navigator
          tabBarOptions={{activeTintColor: '#43a047'}}>
            <Tab.Screen name="Booking" component={BookingScreen} />
            <Tab.Screen name="Borrowed" component={BorrowedScreen} />
          </Tab.Navigator>
      </Container>
    );
  }
}

export default ExploreScreen;
