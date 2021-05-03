import React, { Component } from 'react';
import { Text, View, StyleSheet,TextInput,FlatList,TouchableOpacity,SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import RadioButton from '../Components/RadioButton';

import { ColorPicker } from 'react-native-status-color-picker';
const icons=[{name:'grav'},{name:'bath'},{name:'thermometer'},{name:'free-code-camp'},{name:'id-card'},{name:'address-book'},{name:'envelope-open'},{name:'motorcycle'},{name:'birthday-cake'},{name:'paint-brush'},{name:'cc-visa'}
,{name:'handshake-o'},{name:'fa'},{name:'shopping-basket'},{name:'fort-awesome'},{name:'credit-card-alt'},{name:'black-tie'},{name:'tv'},{name:'safari'},{name:'bed'},{name:'diamond'},{name:'futbol-o'},{name:'database'},{name:'child'},{name:'language'},];
const PROP = [
	{
		key: 'Expenses',
		text: 'Expenses',
	},
	{
		key: 'Incomes',
		text: 'Incomes',
	},
	

];
export default class Create extends Component {
  state = {
    colors: ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"],
    selectedColor: '#F44336',
  };

  onSelect = color => this.setState({ selectedColor: color });

  render() {
    return (
        <SafeAreaView  style={styles.container}>
      <View>
        <TextInput style={styles.input} placeholder="name Category" placeholderTextColor="#8B8787"></TextInput>
        <RadioButton PROP={PROP}  />
        <FlatList
        numColumns={5}
        data={icons}
        renderItem={({item})=>(
           <TouchableOpacity style={styles.item}   >
            <View style={styles.item} ><FontAwesome name={item.name} size={27} color="white"/></View>
            </TouchableOpacity>
        )}/>  
        <Text style={styles.text}>Color</Text>
        <ColorPicker
          colors={this.state.colors}
          selectedColor={this.state.selectedColor}
          onSelect={this.onSelect}
        />

        <Text>Selected Color = {this.state.selectedColor}</Text>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Create</Text></TouchableOpacity> 
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    marginLeft:10
    
  },
  input:{
   borderBottomWidth:2,
   borderColor:"#87CEE0",
   width:'80%',
   marginBottom:20
  },
  item:{
    width:50,
    height:50, 
    backgroundColor:"#A9C3CA",
    borderRadius:40,
     position:'relative',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:15,
    marginHorizontal:5,
    marginVertical:5
    
  },
  text:{
    fontSize:20,
    marginBottom:10,
    marginTop:20,
    fontWeight:'bold',
    color:'#177685',
    paddingRight:15
     
  },
  button:{ borderRadius:20,
    height:40,
    width:150,
    backgroundColor:"#87CEEB",
    alignSelf:'center',
    marginTop:20,
    marginBottom:20
      },
   buttonText:{
       color:"white",
       fontWeight: 'bold',
       fontSize : 25,
       textAlign:'center',
   }
});
