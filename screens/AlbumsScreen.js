import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, Image } from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';

export default class AlbumScreen extends React.Component {
    static navigationOptions = {
        title: 'Some Album',
    };

    constructor() {
        super();
        this.state = {
            albums: [
                {
                    title: 'Meteora',
                    image: 'https://i.pinimg.com/originals/c1/db/04/c1db04e854d022ea38b504e7f2a38025.jpg'
                },
                {
                    title: 'Meteora',
                    image: 'https://i.pinimg.com/originals/c1/db/04/c1db04e854d022ea38b504e7f2a38025.jpg'
                },
                {
                    title: 'Meteora',
                    image: 'https://i.pinimg.com/originals/c1/db/04/c1db04e854d022ea38b504e7f2a38025.jpg'
                },
                {
                    title: 'Meteora',
                    image: 'https://i.pinimg.com/originals/c1/db/04/c1db04e854d022ea38b504e7f2a38025.jpg'
                },
            ]
        }
    }
    renderAlbums() {
        const { albums } = this.state;

        return albums.map((album, index) => {
            return (
                <Card
                    title={album.title}
                    image={{ uri: album.image }}
                >
                    <Button
                        icon={{ name: 'code' }}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
            )
        })

    }

    render() {

        return (
            <ScrollView style={styles.container}>
                {this.renderAlbums()}
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
