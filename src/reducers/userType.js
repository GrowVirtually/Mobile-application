const userTypeReducer = (state, action) => {
  switch (action.type) {
    case 'GROWER':
      return 'grower';
    case 'CONSUMER':
      return 'consumer';
    default:
      return state;
  }
};

export default userTypeReducer;
