import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor() {

    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title={'Go to Albums'} onPress={() =>  this.props.navigation.navigate('AlbumsScreen') }></Button>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }

});
