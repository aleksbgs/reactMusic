import React from 'react';
import { View } from 'react-native';
import { Card, Text, Button, Image } from 'react-native-elements';

export class CardList extends React.Component {


    renderAlbums() {
        const { data, imageKey, titleKey, buttonText } = this.props;
        return data.map((item, index) => {
            return (
                <Card
                    key={index}
                    title={item[titleKey]}
                    image={{ uri: item[imageKey] }}
                >
                    <Button
                        icon={{ name: 'code' }}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title={buttonText} />
                </Card>
            )
        })
    }

    render() {
        const { data } = this.props;

        if (data && data.length > 0) {
            return this.renderAlbums()
        } else {
            return <View><Text>Loading Data...</Text></View>
        }

    }
}
