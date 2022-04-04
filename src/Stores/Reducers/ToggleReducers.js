const ToggleReducers = (state = false, { type, payload }) => {
  switch (type) {
    case "toggle":
      return (state = payload);
    default:
      return state;
  }
};

export default ToggleReducers;
