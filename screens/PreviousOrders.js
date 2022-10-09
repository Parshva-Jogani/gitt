
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

export default class PreviousOrders extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
         {id:1, image: "https://bootdey.com/img/Content/avatar/avatar1.png"},
         {id:2, image: "https://bootdey.com/img/Content/avatar/avatar6.png"},
         {id:3, image: "https://bootdey.com/img/Content/avatar/avatar2.png"},
         {id:4, image: "https://bootdey.com/img/Content/avatar/avatar3.png"},
         {id:5, image: "https://bootdey.com/img/Content/avatar/avatar4.png"},
      ],
    };
  }

  render() {
    return (
      <FlatList 
        enableEmptySections={true}
        data={this.state.data}
        keyExtractor= {(item) => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.box}>
              <Image style={styles.image} source={{uri: item.image}} />
              <View style={styles.boxContent}>
                <Text style={styles.title}>Volunteer name</Text>
                <Text style={styles.description}>Previous work</Text>
                <View style={styles.buttons}>
                  <TouchableHighlight style={[styles.button, styles.view]} onPress={() => this.clickListener('login')}>
                    <Image style={styles.icon} source={{uri: 'https://cdn-icons-png.flaticon.com/128/1062/1062675.png'}}/>
                  </TouchableHighlight>

                  <TouchableHighlight style={[styles.button, styles.profile]} onPress={() => this.clickListener('login')}>
                    <Image style={styles.icon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/126/126509.png'}}/>
                  </TouchableHighlight>

                  <TouchableHighlight style={[styles.button, styles.message]} onPress={() => this.clickListener('login')}>
                    <Image style={styles.icon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'}}/>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          )
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height:100,
  },
  box: {
    padding:20,
    marginTop:-4,
    marginBottom:5,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
  },
  boxContent: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor:"#f5f5f5",
    marginLeft:10,
  },
  title:{
    fontSize:18,
    color:"#151515",
  },
  description:{
    fontSize:15,
    color: "#646464",
  },
  buttons:{
    flexDirection: 'row',
  },
  button: {
    height:35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    width:50,
    marginRight:5,
    marginTop:5,
  },
  icon:{
    width:20,
    height:20,
  },
  view: {
    backgroundColor: "white",
  },
  profile: {
    backgroundColor: "white",
  },
  message: {
    backgroundColor: "white",
  },
});
