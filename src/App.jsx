import { connect } from "react-redux";
import DisplayMessages from "./DisplayMessages";
import { addMessage } from "./actions";

const mapStateToProps = (state) => ({ messages: state });

const mapDispatchToProps = (dispatch) => ({
  submitNewMessage: (message) => dispatch(addMessage(message)),
});

const App = connect(mapStateToProps, mapDispatchToProps)(DisplayMessages);

export default App;
