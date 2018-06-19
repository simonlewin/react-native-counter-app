import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const ResetButton = ({ label, onPress }) => {
  return(
    <TouchableHighlight 
      style={styles.btn} 
      underlayColor='#DDDDDD'
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',  
    width: 85,
    height: 40,
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#5a2961',    
  },
  label: { 
    color: '#FFFFFF',
    fontSize: 11,
  },
});

export default ResetButton;
