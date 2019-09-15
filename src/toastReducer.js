export default function toastReducer(state = {}, action) {
  switch (action.type) {
    case "SHOW_TOAST":
      return {
        isOpen: true;
      };
    case "HIDE_TOAST":
      return {
        isOpen: false
      };
    default:
      return state;
  }
}
