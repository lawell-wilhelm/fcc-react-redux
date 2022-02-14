import { connect } from "react-redux";
import DisplayMessages from "./DisplayMessages";
import { addMessage } from "./actions";

const mapStateToProps = (state) => ({ message: state });

const mapDispatchToProps = (dispatch) => ({
  submitNewMessage: (newMessage) => dispatch(addMessage),
});

const App = connect(mapStateToProps, mapDispatchToProps)(DisplayMessages);

export default App;
