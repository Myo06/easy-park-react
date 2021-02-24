const initialState = {
  test: 'testState',
};

function parkingReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default parkingReducer;
