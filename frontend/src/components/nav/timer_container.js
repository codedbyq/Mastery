import { connect } from "react-redux";
import { openModal } from '../../actions/modal_actions';
import { updateTimer } from '../../actions/timer_actions'


import Timer from "./timer";

const mapStateToProps = (state, ownProps) => {
  return ({
    size: ownProps.size,
  })
};

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  updateTimer: time => dispatch(updateTimer(time)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer);