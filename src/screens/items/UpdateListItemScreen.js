import React, { Component } from 'react';
import {
    Container,
    Content,
    Card,
    Item,
    Thumbnail,
    Button,
    Icon,
    Text,
    Input,
    Label
} from 'native-base';
import { CommonHeader } from '../../components/CommonHeader';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';
import { findById, save } from '../../actions/items';
import { connect } from 'react-redux';
import showError from '../../utils/toast';



const options = {
    title: 'Select Image',
    takePhotoButtonTitle: 'Take Photo...',
    chooseFromLibraryButtonTitle: 'Choose from Library...',
}

class UpdateListItemScreen extends Component {

    constructor(props) {
        super(props);

        const { route } = this.props;

        this.state = {
            avatarSource: null,
            pic: null,
            id: route.params?.id,
            name: '',
            brand: '',
            variety: '',
            error: null
        }
    }

    componentDidMount() {
        const { id } = this.state;
        if (id) {
            this.props.findById(id);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { data, error, navigation, savedData, savedError } = this.props;

        if (prevProps.data !== data) {
            this.setState({ ...data });
        } else if (error && prevProps.error !== error) {
            showError(error);
        } else if (prevProps.savedData !== savedData) {
            navigation.goBack();
            console.log(savedData);
        } else if (savedError && prevProps.savedError !== savedError) {
            showError(savedError);
            this.setState({ error: savedError });
        }
    }

    onChange = (name, value) => {
        this.setState({ [name]: value });
        
    };

    onSubmit = () => {
        this.props.save(this.state);
        console.log(this.state);

    };



    myfun = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('Image Picker Error: ', response.error);
            }

            else {
                let source = { uri: response.uri };


                this.setState({
                    avatarSource: source,
                    pic: response.data
                });
            }
        });
    }

    render() {
        const screen = Dimensions.get('screen');
        const { navigation } = this.props;
        const { name, brand, variety, error } = this.state;
        const errorData = this.props.savedError?.data;

        return (
            <Container style={styles.container}>
                <CommonHeader navigation={navigation} title="Update Item Store" />
                <Content>
                    <View style={styles.view}>
                        <Card style={styles.card}>
                            <View style={{ padding: 10 }}>
                                <TouchableOpacity style={{ alignItems: 'center' }} onPress={this.myfun}>
                                    <Thumbnail large source={{ uri: "https://img20.jd.id/Indonesia/s800x800_/nHBfsgAAcQAAABkAEgQjJgAAwKc.jpg" }} />
                                </TouchableOpacity>

                                <View>
                                    <Item flotingLabel  error={errorData?.name}>
                                        <Label>Name : </Label>
                                        <Input style={styles.input}
                                            value={name}
                                            onChangeText={value => this.onChange('name', value)}
                                        />
                                    </Item>
                                    {errorData?.name && (
                                        <Text style={styles.error}>{errorData.name[0]}</Text>
                                    )}
                                </View>
                                <View>
                                    <Item flotingLabel >
                                        <Label>Brand : </Label>
                                        <Input style={styles.input}
                                            value={brand}
                                            onChangeText={value => this.onChange('brand', value)}
                                        />
                                    </Item>
                                </View>
                                <View>
                                    <Item flotingLabel >
                                        <Label>Variety : </Label>
                                        <Input style={styles.input}
                                            value={variety}
                                            onChangeText={value => this.onChange('variety', value)}
                                        />
                                    </Item>
                                </View>
                            </View>
                        </Card>

                        <View style={{ paddingTop: screen.height / 18, paddingLeft: screen.width / 1.6 }}>
                            <TouchableOpacity style={{ backgroundColor: '#fff' }} onPress={() => this.onSubmit}>
                                <Text style={{ color: '#43a047' }}>
                                    <Icon style={styles.Buttonsave} type='FontAwesome5' name='download' />  SAVE
                            </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    savedData: state.savedItem.data,
    savedError: state.savedItem.error,

    data: state.itemById.data,
    loading: state.itemById.loading || state.savedItem.loading,
    error: state.itemById.error
});
const mapDispatchToProps = {
    findById, save
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateListItemScreen)
