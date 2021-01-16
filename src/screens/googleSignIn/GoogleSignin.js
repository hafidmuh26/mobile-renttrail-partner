import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes
} from '@react-native-community/google-signin';
import { connect } from 'react-redux';
import { oauth } from '../../actions/outh';
import styles from './styles';
import { Button, Icon } from 'native-base';


class GoogleSignins extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            email: '',
            provider: 'google'
        }
    }

    componentDitMount() {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '825440118120-cmei1tadrv16c0pdobcd974le9pfrgv4.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, forceCodeForRefreshToken: true, 
        })
        .then(() => {
            GoogleSignin.signIn()
                .then(this.handleGoogleLogin)
                .catch((err) => {
                    console.log('WRONG SIGNIN', err)
                })
                .done()
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { data, navigation, error } = this.props;

        if (prevProps.data !== data) {
            navigation.navigate('Main');
            console.log('test', data);
        } else if (error && prevProps.error !== error) {
            showError(error);
        }
    }

    _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({
                id: userInfo.user.id, name: userInfo.user.name,
                email: userInfo.user.email, picture: userInfo.user.photo
            });
            this.props.oauth(this.state);
            console.log(this.state);

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
            console.log(error);
        }
    }


    render() {

        return (
            <View>
                <Button style={styles.buttonGoogle} onPress={this._signIn}>
                    <Icon active name="logo-googleplus" style={{color:'#43a047'}} />
                    <Text style={styles.text}>Sign In with Google</Text>
                </Button>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    data: state.oauthed.data,
    loading: state.oauthed.loading,
    error: state.oauthed.error,
});

const mapDispatchToProps = {
    oauth
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleSignins);