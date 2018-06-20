export const incrementAction = (timestamp) => ({
  type: 'INCREMENT',
  timestamp
});

export const decrementAction = (timestamp) => ({
  type: 'DECREMENT',
  timestamp
});

export const resetCountAction = () => ({
  type: 'RESETCOUNT',
});

export const resetHistoryAction = () => ({
  type: 'RESETHISTORY',
});