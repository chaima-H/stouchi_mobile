import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
class Income extends Component{
    state={  }
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    this is expenses
                </Text>
            </View>
        )
    }
}
export default Income;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        alignContent:"center",
    },
});