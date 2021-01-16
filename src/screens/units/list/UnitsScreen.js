import React, { Component } from 'react';
import { Container, Button, Fab, View, Text, Body, Right, Icon, ListItem, Left, Thumbnail, Input, Item, Card } from 'native-base';
import { CommonHeader } from '../../../components/CommonHeader';
import { RefreshControl } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { findAll, deleteById } from '../../../actions/units';
import { Alert } from "react-native";
import { showError } from '../../../utils/toast';
import { SwipeListView } from 'react-native-swipe-list-view';

function RowUnit({ onPress, unit }) {
    return (
        <Card style={{ width: 375, borderRadius: 25 }}>
            <ListItem style={styles.unit} onPress={() => onPress(unit)}>
                <Left><Button style={styles.iconHome}>
                    <Thumbnail square source={{ uri: 'https://cdn3.iconfinder.com/data/icons/glypho-money-and-finance/64/money-bank-gold-512.png' }} />
                </Button>
                </Left>
                <Body>
                    <Text>{unit.name}</Text>
                    <Text>{unit.description}</Text>
                </Body>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </ListItem>
        </Card>
    );
}

class UnitsScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            total: 0,
            search: '',
            params: {
                search: '',
                sort: 'asc',
                page: 0
            }
        };
    }

    componentDidMount() {
        this.reload(this.state.params);
    }

    componentDidUpdate(prevProps, prevState) {
        const { deletedData, deleteError, savedData, data, error } = this.props;

        if (prevProps.data !== data) {
            this.setState({
                data: [...this.state.data, ...data.list],
                total: data.total,
                search: this.state.params.search,
                params: {
                    ...this.state.params,
                    page: data.page
                }
            });

        } else if (prevProps.deletedData !== deletedData ||
            prevProps.savedData !== savedData) {
            this.onRefresh();
        } else if (error && prevProps.error !== error) {
            showError(error);
        } else if (deleteError && prevProps.deleteError !== deleteError) {
            showError(deleteError);
        }
    }

    reload({ search, sort = 'asc', page = 0 } = {}) {
        this.props.findAll({ search: { name: search, description: search }, sort, page });
    }

    onRefresh = () => {
        const { params } = this.state;
        this.setState(
            {
                data: [],
                total: 0,
                params: { ...params, page: 0 }
            },
            () => this.reload(this.state.params)
        );
    }

    onAdd = () => {
        this.props.navigation.navigate('Unit')
    }

    onShowForm = (unit) => {
        this.props.navigation.navigate('Unit', unit ? { id: unit.id } : null);
    }

    onDelete = (unit) => {
        Alert.alert(
            "Confirmation",
            "Are you sure to Delete ?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "OK", onPress: () => this.props.deleteById(unit.id) }
            ]
        );
    }

    onSearch = () => {
        const { search, params } = this.state;
        this.setState(
            {
                data: [],
                total: 0,
                params: { ...params, search: search, page: 0 }
            },
            () => this.reload(this.state.params)
        );
    }

    onEndReached = () => {
        const { data, total, params } = this.state;
        if (data.length < total) {
            this.reload({
                ...params,
                page: params.page + 1
            });
        }
    }

    render() {
        const { navigation, loading } = this.props;
        const { data, search } = this.state;

        return (
            <Container>
                <CommonHeader navigation={navigation} title={"Profile"} />
                <View style={styles.content}>
                    <Item style={styles.buttonSearch} rounded>
                        <Input placeholder='Search here...' value={search}
                            onChangeText={search => this.setState({ search })} />
                        <Button transparent onPress={this.onSearch}>
                            <Icon name='search' />
                        </Button>
                    </Item>
                    <SwipeListView
                        refreshControl={
                            <RefreshControl refreshing={loading} onRefresh={this.onRefresh} />
                        }
                        data={data}
                        renderItem={({ item: unit }) => <RowUnit onPress={this.onShowForm} unit={unit} />}
                        renderHiddenItem={data => (
                            <View style={styles.hiddenUnit}>
                                <Button style={styles.deleteButton} onPress={() => this.onDelete(data.item)}>
                                    <Icon type="FontAwesome" name="trash" />
                                </Button>
                            </View>
                        )}
                        rightOpenValue={-75}
                        keyExtractor={unit => unit.id.toString()}
                        onEndReached={this.onEndReached}
                        onEndReachedThreshold={0.5}
                    />
                </View>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    deletedData: state.deletedUnitById.data,
    deleteError: state.deletedUnitById.error,
    savedData: state.savedUnit.data,
    data: state.units.data,
    loading: state.units.loading || state.deletedUnitById.loading,
    error: state.units.error
});

const mapDispatchToProps = {
    findAll, deleteById
};

export default connect(mapStateToProps, mapDispatchToProps)(UnitsScreen)