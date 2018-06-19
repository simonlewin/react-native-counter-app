import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const Button = ({ backgroundColor, underlayColor, label, onPress, disabled }) => {
  const buttonStyle = {
    backgroundColor: !disabled ? backgroundColor : '#AAAAAA'
  }

  return(
    <TouchableHighlight 
      style={[styles.btn, buttonStyle]} 
      underlayColor={underlayColor}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',  
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 5,
  },
  label: { 
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Button;
