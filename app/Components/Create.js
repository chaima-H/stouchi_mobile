import React, { Component } from 'react';
import { Text, View, StyleSheet,TextInput,FlatList,TouchableOpacity,SafeAreaView 
,KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback,Platform} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ColorPicker } from 'react-native-status-color-picker';
const icons=[{name:'grav'},{name:'bath'},{name:'thermometer'},{name:'free-code-camp'},{name:'id-card'},{name:'address-book'},{name:'envelope-open'},{name:'motorcycle'},{name:'birthday-cake'},{name:'paint-brush'},{name:'cc-visa'}
,{name:'handshake-o'},{name:'fa'},{name:'shopping-basket'},{name:'fort-awesome'},{name:'credit-card-alt'},{name:'black-tie'},{name:'tv'},{name:'safari'},{name:'bed'},{name:'diamond'},{name:'futbol-o'},{name:'database'},{name:'child'},{name:'language'},];

export default class Create extends Component {
  state = {
    colors: ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"],
    selectedColor: '#F44336',
    value:null,
    name:'',
    icon:'',
    user:''
  };

  onSelect = color => this.setState({selectedColor:color});
  
  handleName = text => {
    this.setState({name:text});
 };
 axios = require('axios');
    
   
   
 handle=()=>{
   console.log( "text2"+AsyncStorage.getItem('token'));
 AsyncStorage.getItem('token').then(
  res=>{
      console.log(res+"test");
     const data = JSON.stringify({
        "color":this.state.selectedColor,
        "nameCatego":this.state.name,
        "type":this.state.value,
        "nameIcon":this.state.icon,
        "originType":"Catego",
     });
     console.log("zidha"+data);
      const config={
        url:'http://192.168.1.6:8080/api/categories',
        method:'post',
          headers:{
              Authorization:'Bearer '+ res,
              'Content-Type': 'application/json',
          },
          data:data,
          

      };
      console.log("cc"+config);
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      console.log("cc2"+config);
  },
  err=>{console.log(err);}
)
}


  render() {
    console.log( this.state.selectedColor,
      this.state.name,
      this.state.value,
      this.state.icon,
      "Catego");
    const PROP = [
      {
        key: 'Depenses',
        text: 'Expenses',
      },
      {
        key: 'Revenus',
        text: 'Incomes',
      },
    ];
		const { value } = this.state;
    
    return (
      <KeyboardAvoidingView  style={{flex:1}} behavior={Platform.os=== "ios" ? "padding" : "height"}>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView  style={styles.container1}>
      <View>
        <TextInput style={styles.input} placeholder="name Category" placeholderTextColor="#8B8787"  onChangeText={this.handleName}></TextInput>
        <View >
				<View style={styles.cont}>
				{PROP.map(res => {
					return (
						<View key={res.key} style={styles.container}>
							<Text style={styles.radioText}>{res.text}</Text>
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									this.setState({
										value: res.key,
									});
								}}>
                                  {value === res.key && <View style={styles.selectedRb} />}
							</TouchableOpacity>
						</View>
					);
				})}
				</View>
<Text>{this.state.value}</Text>
			</View>
        <FlatList
        numColumns={5}
        data={icons}
        renderItem={({item})=>(
           <TouchableOpacity style={styles.item} onPress={()=>{this.setState({icon:item.name})}} >
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
        <TouchableOpacity style={styles.button}
         onPress={this.handle}>
           
           <Text style={styles.buttonText}>Create</Text></TouchableOpacity> 
           
      </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
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
    marginLeft:10,
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
   },
   cont:{
		flexDirection:'row',
		justifyContent:'space-around',
		marginLeft:5
	},
	container: {
        marginBottom: 20,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
		
	},
    radioText: {
        marginRight: 35,
        fontSize: 20,
        color: '#000',
        fontWeight: '700',
    },
	radioCircle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#87CEE0',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: '#87CEE0',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});
/*()=>{axios.post('http://192.168.1.9:8080/api/categories',{
          color:this.state.selectedColor,
           nameCatego:this.state.name,
           type:this.state.value,
           nameIcon:this.state.icon,
           originType:"Catego",
        })
        .then(function (response) {
          console.log(response);
          console.log( this.state.selectedColor,this.state.value,this.state.name,this.state.icon);
        })
        .catch(function (error) {
          console.log(error);
        });}*/