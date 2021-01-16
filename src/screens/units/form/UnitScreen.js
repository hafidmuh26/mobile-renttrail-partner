import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Form, Button, Input, Item, Label, Text, Icon } from 'native-base';
import { CommonHeader } from '../../../components/CommonHeader';
import { findById, save } from '../../../actions/units';
import styles from './styles';
import { connect } from 'react-redux';
import { showError } from '../../../utils/toast';


class UnitScreen extends Component {

    constructor(props) {
        super(props);

        const { route } = this.props;
        this.state = {
            id: route.params?.id,
            name: '',
            description: ''
        };
    }

    componentDidMount() {
        const { id } = this.state;
        if (id) {
            this.props.findById(this.state.id);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { navigation, savedData, saveError, data, error } = this.props;


        if (prevProps.data !== data) {
            this.setState({ ...data });
        } else if (prevProps.savedData !== savedData) {
            navigation.goBack();
        } else if (error && prevProps.error !== error) {
            showError(error);
        } else if (saveError && prevProps.saveError !== saveError) {
            showError(saveError);
        }
    }

    onChange = (name, value) => {
        this.setState({ [name]: value });
    }

    onSubmit = () => {
        this.props.save(this.state);
    }

    render() {
        const { navigation, loading, saveError } = this.props;
        const { id, name, description } = this.state;

        const errorData = saveError?.data;

        return (
            <Container>
                <CommonHeader navigation={navigation} title="Unit" />
                <Content style={styles.content}>
                    <Form>
                        {
                            id && <Item flotingLabel>
                                <Label>ID</Label>
                                <Input style={styles.input} disabled value={id.toString()} />
                            </Item>
                        }
                        <View>
                            <Item flotingLabel error={errorData?.name != null}>
                                <Label>Name</Label>
                                <Input style={styles.input} value={name} onChangeText={value => this.
                                    onChange('name', value)} />
                            </Item>
                            {errorData?.name && <Text style={styles.error}> {errorData.name[0]} </Text>}
                        </View>
                        <View>
                            <Item flotingLabel error={errorData?.description != null}>
                                <Label>Description</Label>
                                <Input style={styles.input} value={description} onChangeText={value => this.
                                    onChange('description', value)} />
                            </Item>
                            {errorData?.description && <Text style={styles.error}> {errorData.description[0]} </Text>}
                        </View>
                        <Button style={styles.button} full onPress={this.onSubmit} disabled={loading} >
                            <Icon type="FontAwesome" name="download" />
                            <Text style={styles.textSave}>Save</Text>
                        </Button>
                    </Form>
                </Content>
            </Container >
        );
    }
}

const mapStateToProps = state => ({
    savedData: state.savedUnit.data,
    saveError: state.savedUnit.error,
    data: state.unitById.data,
    loading: state.unitById.loading || state.savedUnit.loading,
    error: state.unitById.error,

});

const mapDispatchToProps = {
    findById, save
};

export default connect(mapStateToProps, mapDispatchToProps)(UnitScreen);