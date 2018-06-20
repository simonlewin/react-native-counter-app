import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import moment from 'moment';

import Button from './Button';
import ResetButton from './ResetButton';

const min = 0;
const max = 10;

const Counter = ({ count, history, onIncPress, onDecPress, onResetCount, onResetHistory }) => {
  const isDecDisabled = count === min;
  const isIncDisabled = count === max;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        The Count
      </Text>
      <Image style={styles.image} source={source} />
      <View style={styles.buttonContainer}>
        <Button 
          label={'-'}
          onPress={onDecPress}  
          disabled={isDecDisabled} 
        />
        <Text style={styles.count}>
          {count}
        </Text>
        <Button 
          label={'+'}
          onPress={onIncPress}
          disabled={isIncDisabled} 
        />
        </View>
        <View style={styles.buttonContainer}>
          <ResetButton 
          label={'Reset Count'}
          onPress={onResetCount}
        />
        <ResetButton 
          label={'Reset History'}
          onPress={onResetHistory}
        />
      </View>
      <Text style={styles.historyHeading}>
        History
      </Text>
      <ScrollView style={styles.scroll}>
        { history.map(
          (item, idx) => {
            const timestampDisplay = moment(item.timestamp).calendar();
            const operationDisplay = item.operation === 'inc' ? 'Incremented' : 'Decremented';
            const label = `${ timestampDisplay }: ${ operationDisplay } from ${item.counterBefore} to ${item.counterAfter}`;
            return (
              <Text key={idx} style={styles.history}>{label}</Text>
            ); 
          }
        )}
      </ScrollView>
    </View>
  );
}

const source = require('../assets/count.jpg');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    paddingTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  heading: {
    marginVertical: 10,
    color: '#5a2961',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  count: {
    width: 100,
    marginVertical: 5,
    color: '#5a2961',
    fontSize: 40,
    textAlign: 'center', 
  },
  scroll: {
    flex: 1,
    marginTop: 10,
  },
  historyHeading: {
    marginTop: 20,
    marginBottom: 10,
    color: '#5a2961',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  history: {
    fontSize: 15,
    color: '#000',   
  }
});

export default Counter;