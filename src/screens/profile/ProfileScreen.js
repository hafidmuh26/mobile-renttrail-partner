import React, { Component } from 'react';
import { Container, ListItem, Card, View, Thumbnail, Icon, Button } from 'native-base';
import { CommonHeader } from '../../components/CommonHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { Image, ImageBackground, Text } from 'react-native';
import styles from './styles';
import { findPartnerByAccount, login } from '../../actions/login';
import { connect } from 'react-redux';



class ProfileScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            detail: {
                outlet: '',
                owner: '',
                telp: '',
                address: '',
            },
            email: '',
        }
    }

    // componentDidMount() {
    //     const { email } = this.state

    //     this.props.login(email);
    //     console.log('id',id);
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     const {data, partner, error, navigation} = this.props;


    //     if(prevProps.partner !== partner) {
    //         this.setState({detail: paerner});
    //         console.log(detail);

    //     } else if (prevProps.data !== data) {
    //         this.setState({email: data.email})
    //         console.log(email);

    //     }
    // }

    signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            this.setState({ user: null }); 
         } catch (error) {
            console.error(error);
        }
    };

    render() {
        const { navigation, partner } = this.props;
        console.log(partner);


        return (

            <Container>
                <CommonHeader navigation={navigation} title="My Profile" />
                <View style={styles.content}>
                    <ScrollView>
                        <ImageBackground blurRadius={1} style={styles.image}
                            source={require('../../../assets/images/eiger.jpg')}>
                            <View style={{ alignItems: 'center', padding: 35 }}>
                                <Thumbnail large source={{ uri: "https://kompaskerja.com/wp-content/uploads/2020/02/logo-eiger.jpg" }} />
                                <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>{partner.outlet}</Text>
                            </View>
                        </ImageBackground>

                        <Card>
                            <View style={{ padding: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text> Store  {'\n'}</Text>
                                    <Text style={{ paddingLeft: '45%' }}>{partner.outlet}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text> Owner {'\n'}</Text>
                                    <Text style={{ paddingLeft: '45%' }}>{partner.owner}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text> Phone Number {'\n'}</Text>
                                    <Text style={{ paddingLeft: '29%' }}>{partner.telp}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text> Address</Text>
                                    <Text style={{ paddingLeft: '42%' }}>{partner.address}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text> Store Photos {'\n'}</Text>
                                    <Text style={{ paddingLeft: '18%', color: 'grey', fontStyle: 'italic' }}>{partner.picture}</Text>
                                </View>
                            </View>
                        </Card>

                        <Card>
                            <View style={{ padding: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text> Email {'\n'}</Text>
                                    <Text style={{ paddingLeft: '45%', color: 'grey' }}> {this.props.data.email} </Text>
                                </View>
                                <Text> Change Password </Text>
                                <Text style={{ paddingLeft: '45%', color: 'grey' }}> {this.props.data.password} </Text>
                            </View>
                        </Card>

                        <Text style={{ color: '#43a047', padding: 10, fontStyle: 'italic' }} onPress={() => navigation.navigate('UpdateProfile')}> Updates Your Profile</Text>


                        <View style={{ paddingTop: 50 }}>
                            <Button style={styles.buttonSignout}>
                                <Text onPress={this.signOut} style={{ color: '#ffffff' }}>SIGN OUT</Text>
                            </Button>
                        </View>
                    </ScrollView>
                </View>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    data: state.loged.data,
    loading: state.loged.loading,

    partner: state.loged.data.partner
});
const mapDispatchToProps = {
    findPartnerByAccount, login
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
