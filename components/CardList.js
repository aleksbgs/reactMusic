import React from 'react';
import { View, FlatList } from 'react-native';
import { Card, Text, Button, Image } from 'react-native-elements';

export class CardList extends React.Component {


    renderAlbums() {
        const { data, imageKey, titleKey, buttonText, bottomView } = this.props;
        // return data.map((item, index) => {
        //     return (
        //         <Card
        //             key={index}
        //             title={item[titleKey]}
        //             image={{ uri: item[imageKey] }}
        //         >
        //             {bottomView(item)}
        //         </Card>
        //     )
        // })
        return (
            <FlatList data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <Card
                            key={index}
                            title={item[titleKey]}
                            image={{ uri: item[imageKey] }}
                        >
                            {bottomView(item)}
                        </Card>
                    )
                }}>

            </FlatList>
        )

    }

    render() {
        const { data } = this.props;

        if (data && data.length > 0) {
            return this.renderAlbums()
        } else {
            return <View></View>
        }

    }
}
