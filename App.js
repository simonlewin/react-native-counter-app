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

    const str = moment().calendar();

    if (count < max) {
      this.setState({ 
        count: count + 1,
        history: history.concat([`${str}: Incremented from ${ count } to ${ count + 1 }`])
      });  
    } 
  }

  onPressDec = () => {
    const { count, history } = this.state;

    const str = moment().calendar();
    
    if (count > min) {
      this.setState({ 
        count: count - 1,
        history: history.concat([`${str}: Decremented from ${ count } to ${ count - 1 }`])
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
    // const isDecDisabled = count === min;
    // const isIncDisabled = count === max;

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          The Count
        </Text>
        <Image style={styles.image} source={source} />
        <View style={styles.buttonContainer}>
          <Button 
            backgroundColor='#5a2961' 
            underlayColor='#DDDDDD' 
            label={'-'}
            onPress={this.onPressDec}  
            disabled={count === min} 
          />
          <Text style={styles.count}>
            {count}
          </Text>
          <Button 
            backgroundColor='#5a2961' 
            underlayColor='#DDDDDD' 
            label={'+'}
            onPress={this.onPressInc}
            disabled={count === max} 
          />
          </View>
          <View style={styles.buttonContainer}>
            <ResetButton 
            backgroundColor='#5a2961' 
            underlayColor='#DDDDDD' 
            label={'Reset Count'}
            onPress={this.resetCount}
          />
          <ResetButton 
            backgroundColor='#5a2961' 
            underlayColor='#DDDDDD' 
            label={'Reset History'}
            onPress={this.resetHistory}
          />
        </View>
        <Text style={styles.historyHeading}>
          History
        </Text>
        <ScrollView style={styles.scroll}>
          { history.map((item, idx) => <Text key={idx} style={styles.history}>{item}</Text>) }
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
