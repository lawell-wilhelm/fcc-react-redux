import * as actions from "./actionTypes";

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD:
      return [...state, action.payload];
    default:
      state;
  }
};

export default messageReducer;
