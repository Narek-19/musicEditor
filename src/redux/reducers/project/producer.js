// changechunk
export const setChunk = (state,action) => {
  const stateClone = {...state}
  stateClone.displayColor = action.payload;
  return stateClone;
}

// example
export const setColor = (state,action) => {
  const stateClone = {...state}
  stateClone.displayColor = action.payload;
  return stateClone;
}