const change = (value) => {
  return {
    type: "CHANGE_COLOR",
    payload: value,
  };
};

export { change };
