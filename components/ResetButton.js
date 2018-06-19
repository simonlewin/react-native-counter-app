import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const ResetButton = ({ backgroundColor, underlayColor, label, onPress }) => {
  const buttonStyle = {
    backgroundColor
  }

  return(
    <TouchableHighlight 
      style={[styles.btn, buttonStyle]} 
      underlayColor={underlayColor}
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
  },
  label: { 
    color: '#FFFFFF',
    fontSize: 11,
  },
});

export default ResetButton;
