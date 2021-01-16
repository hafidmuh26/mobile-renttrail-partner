import React, { Component } from 'react';
import {
    Container,
    Content,
    Card,
    Item,
    Thumbnail,
    Icon,
    Body,
    Right,
    Text,
    Left,
    ListItem,
    Input,
    Button,
    Fab,
} from 'native-base';
import { CommonHeader } from '../../components/CommonHeader';
import { View, RefreshControl, Alert } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { findAll, save, deleteById } from '../../actions/items';
import { SwipeListView } from 'react-native-swipe-list-view';


function RowItem({ onPress, item }) {
    return (
        <ListItem style={styles.item} onPress={() => onPress(item)}>
            <Left>
                <Thumbnail
                    square
                    source={require('../../../assets/images/SepatuHiking.jpg')}
                />
            </Left>
            <Body>
                <Text>{item.name}</Text>
            </Body>
            <Right>
                <Icon name="closecircleo" type="AntDesign" style={styles.ButtonDelete}
                    onPress={() => this.onDelete(item)} />
            </Right>
        </ListItem>
    );
}


class ListItemScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            total: 0,
            search: '',
            params: {
                search: '',
                sort: 'asc',
                page: 0,
                size: 10
            }
        };
    }

    componentDidMount() {
        this.props.findAll();

        async function getToken() {
            const token = await AsyncStorage.getItem("token")
            this.setState({
                token: token
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { data, error } = this.props

        if (prevProps.data !== data) {
            this.setState({ data: [...this.state.data, ...data.list] });
        } else if (error && prevProps.error !== error) {
            showError(error);
        }
    }

    onShowForm = (item) => {
        this.props.navigation.navigate('UpdateListItem', item ? { id: item.id } : null)
    }

    reload({ search, sort = 'asc', page = 0 } = {}) {
        this.props.findAll({ search: { name: search }, sort, page });
      }

    onRefresh = () => {
        const { params } = this.state;
        this.setState({ data: [], total: 0, params: { ...params, page: 0 } }, () =>
          this.reload(this.state.params),
        );
      };
    

    onDelete = (item) => {
        Alert.alert(
            "Confirmation",
            "Delete this Item?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "OK", onPress: () => this.props.deleteByid(item.id) }
            ]
        );
    }

    onSearch = () => {
        const { search, params } = this.state;
        this.setState(
            { data: [], total: 0, params: { ...params, search: search, page: 0, size: 10 } },
            () => this.reload(this.state.params),
        );
    };

    render() {
        const { navigation, loading } = this.props;
        const { data, search } = this.state;

        return (
            <Container style={styles.container}>
                <CommonHeader navigation={navigation} title="List Item Store" />
                <Content>
                    <Item style={styles.Search}>
                        <Input
                            placeholder="Search"
                            value={search}
                            onChangeText={search => this.setState({ search })}
                        />
                        <Button transparent onPress={this.onSearch}>
                            <Icon name="search" type='FontAwesome5' />
                        </Button>
                    </Item>
                    <View style={styles.view}>
                        <Card style={styles.card}>
                            <View>
                                <SwipeListView
                                    refreshControl={
                                        <RefreshControl refreshing={loading} onRefresh={this.onRefresh} />
                                    }

                                    data={data}
                                    renderItem={({ item }) => <RowItem onPress={this.onShowForm} item={item} />}
                                    keyExtractor={item => item.id.toString()}
                                    onEndReached={this.onEndReached}
                                    onEndReachedThreshold={0.5}
                                />
                            </View>
                        </Card>
                    </View>
                </Content>
                <Fab onPress={this.onShowForm} style={styles.Fab}>
                    <Icon name={'add'} />
                </Fab>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    savedData: state.savedItem.data,

    data: state.items.data,
    loading: state.items.loading,
    error: state.items.error,

    deleteData: state.deletedItemById.data,
    deleteError: state.deletedItemById.error

});
const mapDispatchToProps = {
    findAll, save, deleteById
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItemScreen)
