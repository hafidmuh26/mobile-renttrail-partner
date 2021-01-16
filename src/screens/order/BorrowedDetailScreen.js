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
    ListItem,
} from 'native-base';
import { CommonHeader } from '../../components/CommonHeader';
import { View, Dimensions } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { rentByIdBorrowed, save } from '../../actions/rents';
import { showError } from '../../utils/toast';

class BorrowedDetailScreen extends Component {

    constructor(props) {
        super(props);

        const { route } = this.props;

        this.state = {
            id: route.params?.id,
            totalPrice: '',
            dateStart: '',
            dateEnd: '',
            status: '',
            user: {},
            item: {}

        }
    }

    componentDidMount() {
        const { id } = this.state;

        if (id) {
            this.props.rentByIdBorrowed(id);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { data, error, navigation, savedRent, savedError } = this.props;

        if (prevProps.data !== data) {
            this.setState({ ...data });
        } else if (error && prevProps.error !== error) {
            showError(error);
        } else if(prevProps.savedRent !== savedRent) {
            navigation.navigate('Transaction');
        } else if(prevProps.savedError !== savedError) {
            showError(savedError);
        }
    }

    onApproved() {
    this.props.save({...this.state, status: 'DONE'});
    }

    render() {
        const screen = Dimensions.get('screen');
        const { navigation } = this.props;
        const { id, user, dateStart, dateEnd, status, totalPrice, item } = this.state;

        return (
            <Container style={styles.container}>
                <CommonHeader navigation={navigation} title="Borrowed Details" />
                <Content>
                    <View style={styles.view}>
                        <Card style={styles.card}>
                            <CardItem style={styles.cardUser}>
                                <Body>
                                    <Text style={styles.NameUser}>{user.name}</Text>
                                    <Text note>{user.address}</Text>
                                    <Text note>{user.noHp}</Text>
                                    <Text note>Date Rent</Text>
                                    <Text note>{dateStart} - {dateEnd}</Text>
                                </Body>
                                <Right>
                                    <Text note>ID : {id}</Text>
                                    <Text style={styles.status}>{status}</Text>
                                </Right>
                            </CardItem>
                            <CardItem>
                                <View style={{ paddingLeft: screen.width / 40 }}>
                                    <Text style={styles.title}>Item</Text>
                                </View>
                                <View style={{ paddingLeft: screen.width / 2 }}>
                                    <Text style={styles.title}>Price</Text>
                                </View>
                            </CardItem>
                            <CardItem>
                                <View style={{ paddingLeft: screen.width / 40 }}>
                                    <Text>{item.name}</Text>
                                </View>
                                {/* <View style={{ paddingRight: screen.width / 4 }}>
                                    <Text>4</Text>
                                </View> */}
                                <View style={{ paddingLeft: screen.width / 2.9 }}>
                                    <Text>Rp.{item.price}</Text>
                                </View>
                            </CardItem>
                            <CardItem header bordered />
                            <CardItem>
                                <Body />
                                <Left>
                                    <Text note style={styles.textTotalPrice }>Total Price</Text>
                                </Left>
                                <Right>
                                    <Text note style={{ color:'red'}}>Rp.{totalPrice}</Text>
                                </Right>
                            </CardItem>
                        </Card>

                        <View style={styles.Approve}>
                            <Button style={styles.btnAprroved} onPress={this.onApproved()}>
                                <Text style={{ color: '#43a047' }}>
                                    <Icon style={{ color: '#43a047' }} type='FontAwesome5' name='check-circle' />  APPROVE
                            </Text>
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    data: state.rentByIdBorrowed.data,
    error: state.rentByIdBorrowed.error,
    loading: state.rentByIdBorrowed.loading || state.saved.loading, 

    savedRent: state.saved.data,
    savedError: state.saved.error,
});
const mapDispatchToProps = {
    rentByIdBorrowed, save
};
export default connect(mapStateToProps, mapDispatchToProps)(BorrowedDetailScreen);
