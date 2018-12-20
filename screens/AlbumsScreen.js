import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, Image } from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';
import { CardList } from '../components/CardList';
import * as actions from '../actions'
import { SearchText } from '../components/SearchText';

export default class AlbumScreen extends React.Component {
    static navigationOptions = {
        title: 'Some Album',
    };

    constructor() {
        super();
        this.state = {
            albums: [],
            isFetching: false
        };
        this.searchTracks = this.searchTracks.bind(this);
    }
    searchTracks = (artist) => {
        this.setState({ isFetching: true, albums: [] });

        actions.searchTracks(artist)
            .then((albums) => this.setState({ albums, isFetching: false }))
            .catch(err => this.setState({ albums: [], isFetching: false }))
    }
    renderAlbumView() {
        const { albums, isFetching } = this.state;
        return (
            <ScrollView style={styles.container}>
                <SearchText submitSearch={this.searchTracks} />
                {albums.length > 0 && !isFetching &&
                    <CardList data={albums}
                        imageKey={'cover_big'}
                        titleKey={'title'}
                        buttonText="See the details">
                    </CardList>
                }
                {albums.length === 0 && !isFetching &&
                    <Text>Loading albums...</Text>
                }
            </ScrollView>
        )
    }

    render() {

        return this.renderAlbumView();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
