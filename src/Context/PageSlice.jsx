import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice(
    {
        name : "Page Slice",
        initialState : {
            pageNumber : 0,
            totalPages : 8
        },
        reducers : {
            setPageNumber : (state, action) => {
                state.pageNumber = action.payload;
            }
        }
    }
);

export const { setPageNumber } = pageSlice.actions;
export default pageSlice.reducer;