import {Image} from 'react-native';
import React from 'react';
import {Button} from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';

const WithCTA = props => (
  <Onboarding
    showDone={false}
    onSkip={() => props.navigation.navigate('Login')}
    pages={[
      {
        title: 'Hey!',
        subtitle: 'Find Your Journey ',
        backgroundColor: '#43a047',
        image: (
          <Image
            style={{width: 400, height: 300}}
            source={require('../../../assets/images/1.png')}
          />
        ),
      },
      {
        title: 'Send Messages',
        subtitle: 'You can reach everybody with us',
        backgroundColor: '#43a047',
        image: (
          <Image
            style={{width: 400, height: 300}}
            source={require('../../../assets/images/2.png')}
          />
        ),
      },
      {
        title: 'Get Notified',
        subtitle: 'We will send you notification as soon as something happened',
        backgroundColor: '#43a047',
        image: (
          <Image
            style={{width: 400, height: 300}}
            source={require('../../../assets/images/3.png')}
          />
        ),
      },
      {
        title: "That's Enough",
        subtitle: (
          <Button
            title={'Get Started'}
            containerViewStyle={{marginTop: 20}}
            backgroundColor={'#f194ff'}
            borderRadius={5}
            textStyle={{color: 'black'}}
            color="#f194ff"
            onPress={() => props.navigation.navigate('Login')}
          />
        ),
        backgroundColor: '#43a047',
        image: (
          <Image
            style={{width: 300, height: 250}}
            source={require('../../../assets/images/mount.png')}
          />
        ),
      },
    ]}
  />
);

export default WithCTA;
