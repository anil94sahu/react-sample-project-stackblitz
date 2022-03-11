const amountReducer = ({ state = 0, action }) => {
  let [type, payload] = action;
  if (action.type === 'deposit') {
    return state + payload;
  } else if (action.type === 'withdraw') {
    return state - payload;
  } else {
    return state;
  }
};

export default amountReducer;
