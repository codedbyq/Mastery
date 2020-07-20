import { connect } from "react-redux";
import { openModal } from '../../actions/modal_actions';


import Timer from "./timer";

const mapStateToProps = (state, ownProps) => {
  return ({
    size: ownProps.size,
  })
};

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer);