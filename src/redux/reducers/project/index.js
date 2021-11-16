import { setColor } from "./producer";



const initialState = {
  audioUrl: "https://soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  displayColor:"black",
  canvasWidth: 1920,
  canvasHeight: 1080,
  duration: 186,
  audioChunks: [
    {
      id: 1,
      start: 5,
      end: 25,
      textParams: {
      text: "Some Text",
      coordinates: [120, 190],
      },
    },
    {
      id: 2,
      start: 80,
      end: 140,
      textParams: {
        text: "Some Text",
        coordinates: [120, 190],
      },
    },
  ],
};

const project = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return setColor(state,action);
    default:
      return state;
  }
};
export default project;