import React, { Component } from "react";
import { Text, View, Button, Icon } from "native-base";
import { TouchableOpacity } from 'react-native'
import { RNCamera } from "react-native-camera";
import styles from './styles';
import {connect} from 'react-redux';
import {rentById} from '../../actions/rents';
import { showError } from "../../utils/toast";


class ScannerScreen extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data: {
              id:'',
              totalPrice:'',
              dateStart:'',
              dateEnd:'',
              item:'',
              user:'',
              status:'',
          }
        };
      }

    
      componentDidUpdate(prevProps, prevState) {
        const {data, error, navigation} = this.props;

        if(prevProps.data !== data) {
            this.setState({data:{...data}});
            console.log(data);
            navigation.navigate('BookingDetail', {id: data?.id});
        } else if(error && prevProps.error !== error) {
            showError(error);
        }
      }

    onBackPress = () => {
        this.props.navigation.goBack();
    }



    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
        }
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: 'white', flex: 1 }}>

                    <View style={{ width: '100%', height:"8%", flexDirection: 'row' }}>
                        <View>
                            <Icon onPress={this.onBackPress} style={{ padding:8}} name='ios-arrow-back' />
                        </View>
                        <View style={{ justifyContent: 'center'}}>
                            <Text style={{alignSelf: 'center'}}> Scan QR Code</Text>

                        </View>
                    </View>

                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={{
                           
                           height: '100%',
                           width: '100%',
                            alignSelf: 'center'
                        }}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        onBarCodeRead={(barcodes) => {
                            this.props.rentById(barcodes.data);
                            console.log(barcodes);
                            
                            
                        }}
                    />

                </View>

                <View style={{ height: 160, backgroundColor: 'white' }}>
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                     <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                         <Text style={{ fontSize: 14 }}>Turn on Flash</Text>
                     </TouchableOpacity>
                 </View>
                    <View style={{ height:'10%' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 18 }}>Place the <Text style={{ fontWeight: 'bold' }}>QR Code</Text> inside the frame</Text>
                    </View>
                </View>
                <View>
                </View>
            </View >
        )
    }
}

const mapStateToProps = state => ({
    data: state.rentById.data,
    error: state.rentById.error,
    loading: state.rentById.loading
  });
  
  const mapDispatchToProps = {
    rentById
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ScannerScreen);


