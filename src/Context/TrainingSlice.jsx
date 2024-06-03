import { createSlice } from "@reduxjs/toolkit";

const trainingSlice = createSlice(
    {
        name : "Training Slice",
        initialState : {
            training : localStorage.getItem('training')
        },
        reducers : {
            setTraining : (state, action) => {
                state.training = action.payload;
                localStorage.setItem('training');
            }
        }
    }
);

export const { setTraining } = trainingSlice.actions;

export default trainingSlice.reducer;