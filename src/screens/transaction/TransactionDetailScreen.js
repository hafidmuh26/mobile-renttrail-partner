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
} from 'native-base';
import { CommonHeader } from '../../components/CommonHeader';
import { View, Dimensions } from 'react-native';
import styles from './styles';



class TransactionDetailScreen extends Component {

    render() {
        const screen = Dimensions.get('screen');
        const { navigation } = this.props;
        return (
            <Container style={styles.container}>
                <CommonHeader navigation={navigation} title="Transaction Details" />
                <Content>
                    <View style={styles.view}>

                        <Card style={styles.card}>
                            <CardItem>
                                <Body>
                                    <Text style={{ color: '#43a047', fontWeight: 'bold' }}>Rent Destination</Text>
                                    <Text note >Firdaus</Text>
                                    <Text note >Jln. Merbabu No. 179 Ciputat, Tanggerang Selatan Banten</Text>
                                </Body>
                                <Right>
                                    <Text> ID R0134</Text>
                                </Right>
                            </CardItem>
                            <CardItem header bordered />
                            <CardItem>
                                <View style={{ paddingRight: screen.width / 2.5 }}>
                                    <Text>Rent  Start</Text>
                                </View>
                                <View>
                                    <Text note>20 Mei 2020 14:30</Text>
                                </View>
                            </CardItem>
                            <CardItem>
                                <View style={{ paddingRight: screen.width / 2.7 }}>
                                    <Text>Rent  Finish</Text>
                                </View>
                                <View>
                                    <Text note>30 Mei 2020 14:30</Text>
                                </View>
                            </CardItem>
                        </Card>


                        <Card style={styles.card}>
                            <CardItem>
                                <Body>
                                    <Text style={{ color: '#43a047', fontWeight: 'bold' }}>PAYMENT</Text>
                                </Body>
                                <Right>
                                    <Text> ID R0134</Text>
                                </Right>
                            </CardItem>
                            <CardItem header bordered />
                            <CardItem>
                                <View style={{ paddingRight: screen.width / 4 }}>
                                    <Text>Item</Text>
                                </View>
                                <View style={{ paddingRight: screen.width / 4 }}>
                                    <Text>Quantity</Text>
                                </View>
                                <View style={{ paddingRight: screen.width / 4 }}>
                                    <Text>Price</Text>
                                </View>
                            </CardItem>
                            <CardItem header bordered />

                            <CardItem>
                                <View style={{ paddingRight: screen.width / 5 }}>
                                    <Text>Backpack</Text>
                                </View>
                                <View style={{ paddingRight: screen.width / 4 }}>
                                    <Text>4</Text>
                                </View>
                                <View style={{ paddingRight: screen.width / 4 }}>
                                    <Text>Rp.500,000</Text>
                                </View>
                            </CardItem>

                            <CardItem>
                                <View style={{ paddingRight: screen.width / 3.7 }}>
                                    <Text>Shoes</Text>
                                </View>
                                <View style={{ paddingRight: screen.width / 4 }}>
                                    <Text>4</Text>
                                </View>
                                <View style={{ paddingRight: screen.width / 4 }}>
                                    <Text>Rp.300.000</Text>
                                </View>
                            </CardItem>

                            <CardItem>
                                <View style={{ paddingRight: screen.width / 3.7 }}>
                                    <Text>Camp</Text>
                                </View>
                                <View style={{ paddingRight: screen.width / 4 }}>
                                    <Text>2</Text>
                                </View>
                                <View style={{ paddingRight: screen.width / 4 }}>
                                    <Text>Rp.450.000</Text>
                                </View>
                            </CardItem>
                            <Text style={{ borderBottomWidth: 1, borderBottomColor: '#D5DCD8' }} />
                            <CardItem>
                                <Body />
                                <Left>
                                    <Text note>Penalty</Text>
                                </Left>
                                <Right>
                                    <Text note style={{ color: '#43a047' }}>Rp.0</Text>
                                </Right>
                            </CardItem>
                            <CardItem>
                                <Body />
                                <Left>
                                    <Text note>Total Price</Text>
                                </Left>
                                <Right>
                                    <Text note style={{ color: '#43a047' }}>Rp.1.250.000</Text>
                                </Right>
                            </CardItem>
                        </Card>



                    </View>
                </Content>
            </Container >
        );
    }
}

// const mapStateToProps = state => ({
//     savedData: state.savedItem.data,
//     data: state.items.data,
//     loading: state.items.loading
// });
// const mapDispatchToProps = {
//     findAll
// };
// export default connect(mapStateToProps, mapDispatchToProps)(TransactionDetailScreen)
export default TransactionDetailScreen;