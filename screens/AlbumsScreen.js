import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, Image } from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';
import { CardList } from '../components/CardList';
import * as actions from '../actions'

export default class AlbumScreen extends React.Component {
    static navigationOptions = {
        title: 'Some Album',
    };

    constructor() {
        super();
        this.state = {
            albums:[]
        };
        actions.searchTracks('eminem').then((albums) => this.setState({ albums }));
    }


    render() {
        const { albums } = this.state;
        return (
            <ScrollView style={styles.container}>
                <CardList data={albums}
                    imageKey={'cover_big'}
                    titleKey={'title'}
                    buttonText="See the details"
                />
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
