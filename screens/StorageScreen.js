import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import * as actions from '../actions';


export default class StorageScreen extends React.Component {
    static navigationOptions = {
        title: 'Storage',
    };

    constructor() {
        super();
        this.state = {
            value: ''
        }

    }

    async storeData() {
        const data = {
            value: 'Some testing data!'
        }
        const value = await actions.storeData('someKey', data);
        if (value) {
            console.log(value)
        }

    }
    async retreiveData() {
        const data = await actions.retrieveData('someKey');
        if (data) {
            this.setState({
                value: data.value
            })
        }
        console.log(value);
    }
    async removeData() {
        const success = await actions.clearStorage();
        if (success) {
            this.setState({
                value: ''
            })
        }
    }

    render() {

        const { value } = this.state;
        return (
            <ScrollView style={styles.container}>
                <Text>i am storage screen</Text>
                <Button title='store data' onPress={() => { this.storeData() }}></Button>
                <Button title='retreive data' onPress={() => { this.retreiveData() }}></Button>
                <Button title='remove data' onPress={() => { this.removeData() }}></Button>
                <Text>{value}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
