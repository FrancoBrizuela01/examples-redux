const initialState = {
  color: "bg-white",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state= initialState, action) => {
  if (action.type === "CHANGE_COLOR") {
    return {
      ...state,
      color: action.payload,
    };
  }
  return state;
};

export const selectCurrentColor = (state) => {
  return state.colorReducer.color;
};
