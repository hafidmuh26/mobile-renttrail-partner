import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, Image, AsyncStorage } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { login, findPartnerByAccount } from '../../actions/login';
import { Text, Icon, Button } from 'native-base';
import GoogleSignins from '../googleSignIn/GoogleSignin';
import { showError } from '../../utils/toast';



class LoginScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                email: '',
                password: '',
            },
        };
    }

    // componentDidMount() {
    //     const {id} = this.state;

    //     this.props.findPartnerByAccount(id);
    // }

    componentDidUpdate(prevProps) {
        const { data, navigation, error, dataAcc, dataAccErr,  profileData, profileError } = this.props;
        
        if (prevProps.data !== data) {
            if(data?.email !== null) {
                navigation.navigate('Main');
            }
        } else if (error && prevProps.error !== error) {
            showError(error);
        }
        // } else if (error && prevProps.error !== error) {
        //     showError(error);
        // } else if (prevProps.profileData !== profileData) {
        //     this.props.findAccountById(profileData);
        //     console.log('Profile',profileData);
        //     navigation.navigate('Main');
        // } else if (prevProps.dataAcc !== dataAcc) {
        //     AsyncStorage.setItem("partner", dataAcc?.id.toString());
        //     console.log('Partner', dataAcc);
            
        // }
    }

    onLogin = () => {
        this.props.login(this.state.data);

    };

    onChangeText = (name, value) => {
        this.setState({ data: { ...this.state.data, [name]: value } });

    }

    render() {

        const { navigation } = this.props;
        const { data } = this.state;

        return (

            <View style={styles.container}>
                <Image style={styles.image} source={require('../../../assets/images/mont.png')} />
                <Text style={styles.title}>RentTrail</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Email'
                    placeholderTextColor='black'
                    value={data.email}
                    onChangeText={value => this.onChangeText('email', value)}
                />
                <TextInput
                    secureTextEntry
                    style={[styles.textInput]}
                    placeholder='Password'
                    placeholderTextColor='black'
                    value={data.password}
                    onChangeText={value => this.onChangeText('password', value)}
                />
                <TouchableOpacity style={styles.buttonStyle} onPress={this.onLogin}>
                    <Text style={styles.textSignin}>Sign in</Text>
                </TouchableOpacity>

                <Text style={styles.instructions} onPress={() => navigation.navigate('Forgot')}>{"\n"} Forgot Password?</Text>
                <Text>OR</Text>
                <Text style={styles.instructions} onPress={() => navigation.navigate('Signup')}>Sign up {"\n"}</Text>

                <View style={styles.google}>
                    <GoogleSignins navigation={navigation} />
                </View>

            </View>
        );
    }
}

const mapStateToProps = state => ({
    data: state.loged.data,
    loading: state.loged.loading,
    error: state.loged.error,


});


const mapDispatchToProps = {
    login, findPartnerByAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);