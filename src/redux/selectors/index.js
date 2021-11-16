import { createSelector } from "reselect";

export const getProject = (state) => state.project;

export const getAudioUrl = createSelector(getProject, (project) => {
  return project.audioUrl;
});

export const getColor = createSelector(getProject, (project) => {
  return project.displayColor;
});
