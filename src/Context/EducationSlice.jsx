import { createSlice } from "@reduxjs/toolkit";

const educationSlice = createSlice({
  name: "Education Slice",
  initialState: {
    education: JSON.parse(localStorage.getItem("education")) || [
      {
        courseName: "",
        branch: "",
        percentage: "",
        instituteName: "",
        instituteCity: "",
        instituteState: "",
        startYear: "",
        endYear: "",
      },
    ],
  },
  reducers: {
    setEducation: (state, action) => {
      const index = action.payload.index;
      const updatedData = action.payload.updatedData;
      state.education[index] = {...state.education[index], ...updatedData[0]};
      localStorage.setItem("education", JSON.stringify(state.education));
    },

    addOtherEducation: (state) => {
      state.education = [
        ...state.education,
        {
          courseName: "",
          branch: "",
          percentage: "",
          instituteName: "",
          instituteCity: "",
          instituteState: "",
          startYear: "",
          endYear: "",
        },
      ];
      localStorage.setItem("education", JSON.stringify(state.education));
    },
  },
});

export const { setEducation, addOtherEducation } = educationSlice.actions;

export default educationSlice.reducer;
