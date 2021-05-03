import React, { Component } from "react";
import { Button, View ,StyleSheet,Text} from "react-native";
import DatePickerModal from "react-native-modal-datetime-picker";
 
export default class DatePicker extends Component {
  state = {
      Visibility: false,
      DateDisplay:""
    }
  
 
  onPressButton = () => {
    this.setState({  Visibility: true });
  };
 
  onPressCancel = () => {
    this.setState({ Visibility : false });
  };
 
  handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    this.setState({DateDisplay:date.toUTCString()});
  };
 
  render() {
    return (
      <View style={styles.MainView}>
        <Button title="Show DatePicker" onPress={this.onPressButton} />
        <Text>{this.state.DateDisplay}</Text>
        <DatePickerModal
          isVisible={this.state.Visibility}
          onConfirm={this.handleConfirm}
          onCancel={this.onPressCancel}
          mode="date"
          
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
    
  }
})