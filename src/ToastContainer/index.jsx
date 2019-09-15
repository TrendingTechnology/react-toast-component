import React from "react";
import { connect } from "react-redux";
import Toast from "../Toast";

function ToastContainer(props) {
  return <Toast {...props} />;
}

const mapStateToProps = state => ({
  isOpen: state && state.toastReducer && state.toastReducer.isOpen,
  animation: state && state.toastReducer && state.toastReducer.animation
});

export default connect(mapStateToProps)(ToastContainer);
