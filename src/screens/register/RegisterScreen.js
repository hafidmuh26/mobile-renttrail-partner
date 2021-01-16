import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { register } from '../../actions/register';
import { Text, Card } from 'native-base';
import { showError } from '../../utils/toast';


class RegisterScreen extends Component {

    constructor(props) {
        super(props);

        const {route} = this.props;

        this.state = {
            data: {
                name: '',
                address: '',
                telp: '',
                picture: '',
                owner: '',
                account: route.params?.id
            },
        };
    }

    componentDidUpdate(prevProps) {
        const { data, navigation, error } = this.props;

        if (prevProps.data !== data) {
            navigation.navigate('Main');
            console.log(data);
            
        } else if (error && prevProps.error !== error) {
            showError(error);
        }
    }

    onSubmit = () => {
        this.props.register(this.state.data);

    };

    onChangeText = (name, value) => {
        this.setState({ data: { ...this.state.data, [name]: value } });
    }

    render() {
        const { data } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image source={require('../../../assets/images/mont.png')} />
                </View>
                <Text style={styles.title}>RENT TRAIL</Text>
                <View style={styles.view}>
                    <Card style={styles.cardForm}>
                        <View style={styles.viewCard}>
                            <Text style={styles.titlePwd}>REGISTER</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Name Outlet'
                                placeholderTextColor='black'
                                value={data.name}
                                onChangeText={value => this.onChangeText('name', value)}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder='Name Owner'
                                placeholderTextColor='black'
                                value={data.owner}
                                onChangeText={value => this.onChangeText('owner', value)}
                            />
                            <TextInput
                                style={[styles.textInput]}
                                placeholder='Address'
                                placeholderTextColor='black'
                                value={data.address}
                                onChangeText={value => this.onChangeText('address', value)}
                            />
                            <TextInput
                                style={[styles.textInput]}
                                placeholder='Telephone'
                                placeholderTextColor='black'
                                value={data.telp}
                                onChangeText={value => this.onChangeText('telp', value)}
                            />

                        </View>
                    </Card>
                </View>
                <View style={{paddingTop:'5%'}}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onSubmit}>
                        <Text style={styles.textSignin}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    data: state.register.data,
    loading: state.register.loading,
    error: state.register.error,

});

const mapDispatchToProps = {
    register
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);