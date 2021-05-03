// React Native Date Picker – To Pick the Date using Native Calendar
// https://aboutreact.com/react-native-datepicker/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

//import DatePicker from the package we installed
import DatePicker from 'react-native-datepicker';

const TestDate = () => {
  const [date, setDate] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
       
        <DatePicker
          style={styles.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
     
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              right: 0,
              top: 4,
              marginRight: 0,
            },
            dateInput: {
              marginRight: 50,
              borderColor:'blue'
            },

          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
    </SafeAreaView>
  );
};


export default TestDate;

const styles = StyleSheet.create({
  container: {
  
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 8,
    
   
  },
});