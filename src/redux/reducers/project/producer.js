export const setUrl = (state, action) => {
  const stateClone = {...state}
  stateClone.audioUrl = action.payload
  return stateClone;
};

export const setColor = (state,action) => {
  const stateClone = {...state}
  stateClone.displayColor = action.payload;
  return stateClone;
}