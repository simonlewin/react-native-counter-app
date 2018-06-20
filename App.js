import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import moment from 'moment';

import Button from './components/Button';
import ResetButton from './components/ResetButton';

const min = 0;
const max = 10;

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      history: [],
    }
  }

  onPressInc = () => {
    const { count, history } = this.state;

    if (count < max) {
      this.setState({ 
        count: count + 1,
        history: [
          {
            timestamp: Date.now(),
            operation: 'inc',
            counterBefore: count,
            counterAfter: count + 1,
          },
          ...history
        ]
      });  
    } 
  }

  onPressDec = () => {
    const { count, history } = this.state;

    const str = moment().calendar();
    
    if (count > min) {
      this.setState({ 
        count: count - 1,
        history: [
          {
            timestamp: Date.now(),
            operation: 'dec',
            counterBefore: count,
            counterAfter: count - 1,
          },
          ...history
        ]
      });  
    } 
  }

  resetCount = () => {
    this.setState({ 
      count: 0,
    });    
  }

  resetHistory = () => {
    this.setState({ 
      history: []
    });    
  }

  render() {
    const { count, history } = this.state;
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
            onPress={this.onPressDec}  
            disabled={isDecDisabled} 
          />
          <Text style={styles.count}>
            {count}
          </Text>
          <Button 
            label={'+'}
            onPress={this.onPressInc}
            disabled={isIncDisabled} 
          />
        </View>
        <View style={styles.buttonContainer}>
          <ResetButton 
            label={'Reset Count'}
            onPress={this.resetCount}
          />
          <ResetButton 
            label={'Reset History'}
            onPress={this.resetHistory}
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
}

const source = require('./assets/count.jpg');

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
