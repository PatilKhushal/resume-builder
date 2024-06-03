import { createSlice } from "@reduxjs/toolkit";

const internshipSlice = createSlice(
    {
        name : "Internship Slice",
        initialState : {
            internship : localStorage.getItem('internship')
        },
        reducers : {
            setInternship : (state, action) => {
                state.internship = action.payload;
                localStorage.setItem('internship');
            }
        }
    }
);

export const { setInternship } = internshipSlice.actions;

export default internshipSlice.reducer;