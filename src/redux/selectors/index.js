import { createSelector } from "reselect";

export const getProject = (state) => state.project;

export const getAudioUrl = createSelector(getProject, (project) => {
  return project.audioUrl;
});

export const getAudioChunks = createSelector(getProject,(project) => {
  return project.audioChunks;
});

// example
export const getColor = createSelector(getProject, (project) => {
  return project.displayColor;
});
