import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice(
    {
        name : "Projects Slice",
        initialState : {
            projects : localStorage.getItem('projects')
        },
        reducers : {
            setProjects : (state, action) => {
                state.projects = action.payload;
                localStorage.setItem('projects', action.payload);
            }
        }
    }
);

export const {
    setProjects
} = projectsSlice.actions;

export default projectsSlice.reducer;