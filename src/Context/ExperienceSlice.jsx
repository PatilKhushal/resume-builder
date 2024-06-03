import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice(
    {
        name : "Experience Slice",
        initialState : {
            experience : localStorage.getItem('Experience')
        },
        reducers : {
            setExperience : (state, action) => {
                state.experience = action.payload;
                localStorage.setItem('experience');
            }
        }
    }
);

export const { setExperience } = experienceSlice.actions;

export default experienceSlice.reducer;