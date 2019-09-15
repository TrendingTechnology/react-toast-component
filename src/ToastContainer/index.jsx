import { connect } from "react-redux";

function ToastContainer(props) {
  return (
    <div className="ReactToastContainer">
      <Toast {...props} />
    </div>
  );
}

const mapStateToProps = state => ({
  isOpen: state.toastReducer.isOpen,
  animation: state.toastReducer.animation
});

export default connect(mapStateToProps)(ToastContainer);
