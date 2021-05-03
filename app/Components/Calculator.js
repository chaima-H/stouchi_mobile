import React from 'react'
import { SafeAreaView, View ,SafeAreaViewBase,Text} from 'react-native'
import { CalculatorInput } from 'react-native-calculator'
 
export default class Calcul extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <CalculatorInput
          fieldTextStyle={{ fontSize: 24,marginTop:10 }}
          fieldContainerStyle={{ height: 36,marginTop:40 }}
          
        />
      
      </SafeAreaView>
    )
  }
}