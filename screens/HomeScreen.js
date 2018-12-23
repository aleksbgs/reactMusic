import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem, Text, Icon ,Card} from 'react-native-elements';

const menuList = [
  {
    title: "Search Albums",
    subtitle: "Search your favorite music",
    icon: 'music',
    navigateTo: 'Albums'
  },
  {
    title: "Favorite Collections",
    subtitle: "Access to your favorite albums",
    icon: 'heart',
    navigateTo: 'Favorite'
  },
  {
    title: "Settings",
    subtitle: "Customize your app",
    icon: 'cog',
    navigateTo: '#'
  },

]

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor() {

    super();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <List containerStyle={{ backgroundColor: 'grey', marginTop: 0 }}>
          {
            menuList.map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.title} >
                  <View style={styles.cardView}>
                    <Text style={{ marginBottom: 10 }}>
                      {item.subtitle}
                    </Text>
                    <Icon
                      raised
                      name={item.icon}
                      type='font-awesome'
                      color='#f50'
                      size={30}
                      onPress={() => { this.props.navigation.navigate(item.navigateTo) }}

                    />

                  </View>

                </Card>
              )
            })
          }

        </List>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardView: {
    alignItems: 'center'
  }

});
