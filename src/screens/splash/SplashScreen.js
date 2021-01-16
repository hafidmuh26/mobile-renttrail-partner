import React from 'react';
import {View, ImageBackground} from 'react-native';
import styles from './styles';

class SplashScreen extends React.Component {
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 3000),
    );
  };

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Start');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <ImageBackground
          source={require('../../../assets/images/mount.png')}
          style={styles.image}
        />
      </View>
    );
  }
}

export default SplashScreen;
