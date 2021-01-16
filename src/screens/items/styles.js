import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#43a047',
    },
    card: {
        width: screen.width / 1,
    },
    view: {
        alignItems: 'center',
    },
    item: {
        backgroundColor: '#fff',
        borderColor: '#37474f',
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    image: {
        width: 390,
        height: 200,
    },
    Search: {
        backgroundColor: 'white',
        borderBottomWidth: 5,
        borderTopWidth: 2
    },
    Fab: {
        backgroundColor: '#263238'
    },
    ButtonDelete: {
        color: 'red'
    },
    Buttonsave : {
        color: '#43a047'
    },
    error: {
        color: '#f44336',
        paddingHorizontal: 14
    }

});

export default styles;
