const increment = (state, {timestamp}) => {
  const {count, history} = state;
  return {
    ...state, 
    count: count + 1,
    history: [
      {
        timestamp,
        operation: 'inc',
        counterBefore: count,
        counterAfter: count + 1,
      },
      ...history      
    ]
  }
}

const decrement = (state, {timestamp}) => {
  const {count, history} = state;
  return {
    ...state, 
    count: count - 1,
    history: [
      {
        timestamp,
        operation: 'dec',
        counterBefore: count,
        counterAfter: count - 1,
      },
      ...history      
    ]
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': return increment(state, action);
    case 'DECREMENT': return decrement(state, action);
    case 'RESETCOUNT': return ({...state, count: 0});
    case 'RESETHISTORY': return ({...state, history: []});
    default: return state;
  }
};

export default reducer;