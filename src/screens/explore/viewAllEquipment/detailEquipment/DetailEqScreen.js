import React, { Component } from 'react';
import { Container, ListItem, Card, View, Text, Thumbnail, Icon } from 'native-base';
import { CommonHeader } from '../../../../components/CommonHeader';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';



class DetailEqScreen extends Component {

    render() {
        const { navigation } = this.props;
        return (

            <Container>
                <CommonHeader navigation={navigation} title="Equipments " />
                <View style={styles.content}>
                    <Text style={styles.title}>Here all Equipments ... </Text>

                    <ScrollView >
                        <View style={{ paddingLeft: 14, paddingTop: 10, flexDirection: 'row', flexWrap: 'wrap' }}>
                            <TouchableOpacity style={{ paddingRight: 10 }}>
                                <Thumbnail large source={{ uri: "https://img20.jd.id/Indonesia/s800x800_/nHBfsgAAcQAAABkAEgQjJgAAwKc.jpg" }} />
                                <Text style={styles.titleSub}>   Camp</Text>
                            </TouchableOpacity>
                            </View>

                            <View style={styles.viewCard}>
                                <Card style={styles.cardStore}>
                                    <ListItem style={styles.item} onPress={() => onPress(item)}>
                                        <Thumbnail style={{ width: 143, height: 120, borderRadius: 5 }} square large source={{ uri: "https://ae01.alicdn.com/kf/HTB1lmTtKpXXXXc9XXXXq6xXFXXXJ/Three-Season-Tent-Polyester-PU-Coating-Tourist-Tent-1-2-Person-Camping-Tent-With-Carrying-Bag.jpg" }} />
                                        <View style={{ paddingTop: 10 }}>
                                            <Text> Eiger Official Store</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Icon style={{ color: 'grey', fontSize: 20 }} type='FontAwesome' name="map-marker" />
                                                <Text> Ciputat,Tanggerang</Text>
                                            </View>
                                            <Text> Length : 8.5 km</Text>
                                        </View>
                                    </ListItem>
                                </Card>
                                <Card style={styles.cardStore}>
                                    <ListItem style={styles.item} onPress={() => onPress(item)}>
                                        <Thumbnail style={{ width: 143, height: 120, borderRadius: 5 }} square large source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/51acFNA-ALL._AC_.jpg" }} />
                                        <View style={{ paddingTop: 10 }}>
                                            <Text> Backpack Store</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Icon style={{ color: 'grey', fontSize: 20 }} type='FontAwesome' name="map-marker" />
                                                <Text> Ciputat,Tanggerang</Text>
                                            </View>
                                            <Text> Length : 8.5 km</Text>
                                        </View>
                                    </ListItem>
                                </Card>
                                <Card style={styles.cardStore}>
                                    <ListItem style={styles.item} onPress={() => onPress(item)}>
                                        <Thumbnail style={{ width: 143, height: 120, borderRadius: 5 }} square large source={{ uri: "https://ak1.ostkcdn.com/images/products/15439589/6-Person-Tent-Water-Resistant-Dome-Tent-for-Camping-With-Removable-Rain-Fly-And-Carry-Bag-Blue-By-Wakeman-Outdoors-3101c1f2-c6d9-4eec-b49b-04452a635dc6_600.jpg" }} />
                                        <View style={{ paddingTop: 10 }}>
                                            <Text> Shoes Official Store</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Icon style={{ color: 'grey', fontSize: 20 }} type='FontAwesome' name="map-marker" />
                                                <Text> Ciputat,Tanggerang</Text>
                                            </View>
                                            <Text> Length : 8.5 km</Text>
                                        </View>
                                    </ListItem>
                                </Card>
                                <Card style={styles.cardStore}>
                                    <ListItem style={styles.item} onPress={() => onPress(item)}>
                                        <Thumbnail style={{ width: 143, height: 120, borderRadius: 5 }} square large source={{ uri: "https://ae01.alicdn.com/kf/HTB1pWvXIFXXXXXwXVXXq6xXFXXXg/2016-on-sale-6-8-10-12-person-2-bedroom-1-living-room-awning-sun-shelter.jpg" }} />
                                        <View style={{ paddingTop: 10 }}>
                                            <Text> Shoes Official Store</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Icon style={{ color: 'grey', fontSize: 20 }} type='FontAwesome' name="map-marker" />
                                                <Text> Ciputat,Tanggerang</Text>
                                            </View>
                                            <Text> Length : 8.5 km</Text>
                                        </View>
                                    </ListItem>
                                </Card>
                                <Card style={styles.cardStore}>
                                    <ListItem style={styles.item} onPress={() => onPress(item)}>
                                        <Thumbnail style={{ width: 143, height: 120, borderRadius: 5 }} square large source={{ uri: "https://www.abc-of-rockclimbing.com/wp-content/uploads/2019/02/best-6-person-tent-1.jpg" }} />
                                        <View style={{ paddingTop: 10 }}>
                                            <Text> Shoes Official Store</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Icon style={{ color: 'grey', fontSize: 20 }} type='FontAwesome' name="map-marker" />
                                                <Text> Ciputat,Tanggerang</Text>
                                            </View>
                                            <Text> Length : 8.5 km</Text>
                                        </View>
                                    </ListItem>
                                </Card>
                                <Card style={styles.cardStore}>
                                    <ListItem style={styles.item} onPress={() => onPress(item)}>
                                        <Thumbnail style={{ width: 143, height: 120, borderRadius: 5 }} square large source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/91OJdHx3vsL._SX679_.jpg" }} />
                                        <View style={{ paddingTop: 10 }}>
                                            <Text> Shoes Official Store</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Icon style={{ color: 'grey', fontSize: 20 }} type='FontAwesome' name="map-marker" />
                                                <Text> Ciputat,Tanggerang</Text>
                                            </View>
                                            <Text> Length : 8.5 km</Text>
                                        </View>
                                    </ListItem>
                                </Card>
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
export default DetailEqScreen;