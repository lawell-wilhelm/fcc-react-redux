import * as actions from "./actionTypes";

export const addMessage = (message) => ({
  type: actions.ADD,
  payload: message,
});
