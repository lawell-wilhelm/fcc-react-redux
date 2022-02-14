import ADD from "./actionTypes";

export const addMessage = (message) => ({
  type: ADD,
  payload: message,
});
