import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import { List, ListItem, Text, Button ,Card} from 'react-native-elements';
import * as actions from '../actions';
import _ from 'lodash';


export default class FavoriteScreen extends React.Component {
    static navigationOptions = {
        title: 'FavoriteAlbums',
    };

    constructor() {
        super();
        this.state = {
            favoriteAlbums: undefined
        }
        this.getFavoritedAlbums();
    }
    async getFavoritedAlbums() {
        const favoriteAlbums = await actions.retrieveData('favoritedAlbums');
        if (favoriteAlbums) {
            this.setState({ favoriteAlbums });
        }
    }

    renderFavoriteAlbums() {
        const { favoriteAlbums } = this.state;

        if (favoriteAlbums) {
            return _.map(favoriteAlbums, (album, id) => {
                return (
                    <View>
                        <Card
                            key={id}
                            title={album.title}
                        >
                            <Button
                                title='Delete Album'
                                raised
                                backgroundColor='#f50'
                                name='trash'
                                onPress={() => { }}
                            >

                            </Button>

                        </Card>
                    </View>
                )

            })
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <List>
                    {this.renderFavoriteAlbums()}
                </List>
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
