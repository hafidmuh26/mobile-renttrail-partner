import React, { Component } from 'react';
import { Container, ListItem, Card, View, Text, Thumbnail, Icon } from 'native-base';
import { CommonHeader } from '../../../components/CommonHeader';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';



class ViewAllEqScreen extends Component {

    render() {
        const { navigation } = this.props;
        return (

            <Container>
                <CommonHeader navigation={navigation} title="All Equipments " />
                <View style={styles.content}>
                    <Text style={styles.title}>Here all Equipments ... </Text>

                    <ScrollView >
                        <View style={{ paddingLeft: 14, paddingTop: 10, flexDirection: 'row', flexWrap: 'wrap' }}>
                            <TouchableOpacity style={{ paddingRight: 10 }}  onPress={() => navigation.navigate('DetailEquipment')}>
                                <Thumbnail large source={{ uri: "https://img20.jd.id/Indonesia/s800x800_/nHBfsgAAcQAAABkAEgQjJgAAwKc.jpg" }} />
                                <Text style={styles.titleSub}>   Camp</Text>
                            </TouchableOpacity>
                            <View style={{ paddingRight: 10 }}>
                                <Thumbnail large source={{ uri: "https://jeramadventurestore.com/pictures/items/sepatu-hiking-gunung-outdoor-pro-krypton-black-grey-1412_1.jpg" }} />
                                <Text style={styles.titleSub}>  Shoes</Text>
                            </View>
                            <View style={{ paddingRight: 10 }}>
                                <Thumbnail large source={{ uri: "https://www.backpacker.com/.image/ar_3:2%2Cc_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_700/MTY3ODY0ODgxMzY0NjA4Mjcz/119fgg_shells_tnf_bjk.jpg" }} />
                                <Text style={styles.titleSub}> Jacket</Text>
                            </View>
                            <View style={{ paddingRight: 10 }}>
                                <Thumbnail large source={{ uri: "https://cdn.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/9/4/0/7/3/9/5940739_A1_V2.jpg" }} />
                                <Text style={styles.titleSub}>Backpack{"\n"}</Text>
                            </View>
                            <View style={{ paddingRight: 10 }}>
                                <Thumbnail large source={{ uri: "https://contents.mediadecathlon.com/p709700/k$488b6690bb4696cf0d995308cf9a7f33/isothermal-12-to-15-l-cover-for-hiking-water-bottles-blue.jpg?&f=800x800" }} />
                                <Text style={styles.titleSub}>   Camp</Text>
                            </View>
                            <View style={{ paddingRight: 10 }}>
                                <Thumbnail large source={{ uri: "https://cdn.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/9/4/0/7/3/9/5940739_A1_V2.jpg" }} />
                                <Text style={styles.titleSub}>Backpack</Text>
                            </View>
                            <View style={{ paddingRight: 10 }}>
                                <Thumbnail large source={{ uri: "https://img20.jd.id/Indonesia/s800x800_/nHBfsgAAcQAAABkAEgQjJgAAwKc.jpg" }} />
                                <Text style={styles.titleSub}>   Camp</Text>
                            </View>
                            <View style={{ paddingRight: 10 }}>
                                <Thumbnail large source={{ uri: "https://cdn.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/9/4/0/7/3/9/5940739_A1_V2.jpg" }} />
                                <Text style={styles.titleSub}>Backpack {"\n"}</Text>
                            </View>
                            <View style={{ paddingRight: 10 }}>
                                <Thumbnail large source={{ uri: "https://jeramadventurestore.com/pictures/items/sepatu-hiking-gunung-outdoor-pro-krypton-black-grey-1412_1.jpg" }} />
                                <Text style={styles.titleSub}>  Shoes</Text>
                            </View>
                            <View style={{ paddingRight: 10 }}>
                                <Thumbnail large source={{ uri: "https://www.backpacker.com/.image/ar_3:2%2Cc_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_700/MTY3ODY0ODgxMzY0NjA4Mjcz/119fgg_shells_tnf_bjk.jpg" }} />
                                <Text style={styles.titleSub}> Jacket</Text>
                            </View>
                            <View style={{ paddingRight: 10 }}>
                                <Thumbnail large source={{ uri: "https://cdn.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/9/4/0/7/3/9/5940739_A1_V2.jpg" }} />
                                <Text style={styles.titleSub}>Backpack</Text>
                            </View>
                            <View style={{ paddingRight: 10 }}>
                                <Thumbnail large source={{ uri: "https://contents.mediadecathlon.com/p709700/k$488b6690bb4696cf0d995308cf9a7f33/isothermal-12-to-15-l-cover-for-hiking-water-bottles-blue.jpg?&f=800x800" }} />
                                <Text style={styles.titleSub}>   Camp{"\n"}</Text>
                            </View>
                            <View style={{ paddingRight: 10 }}>
                                <Thumbnail large source={{ uri: "https://img20.jd.id/Indonesia/s800x800_/nHBfsgAAcQAAABkAEgQjJgAAwKc.jpg" }} />
                                <Text style={styles.titleSub}>   Camp</Text>
                            </View>
                            <View style={{ paddingRight: 10 }}>
                                <Thumbnail large source={{ uri: "https://jeramadventurestore.com/pictures/items/sepatu-hiking-gunung-outdoor-pro-krypton-black-grey-1412_1.jpg" }} />
                                <Text style={styles.titleSub}>  Shoes</Text>
                            </View>
                        </View>
                    </ScrollView>

                </View>
            </Container>
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
// export default connect(mapStateToProps, mapDispatchToProps)(ViewAllStoreScreen)
export default ViewAllEqScreen;