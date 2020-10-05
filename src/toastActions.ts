const toastActions = {
  addToast: data => dispatch => {
    dispatch({ type: "SHOW_TOAST", data });
  },
  removeToast: () => dispatch => {
    dispatch({ type: "HIDE_TOAST" });
  }
};

export default toastActions;
