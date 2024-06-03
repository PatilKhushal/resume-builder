import { createSlice } from "@reduxjs/toolkit";

const skillsSlice = createSlice({
  name: "Skills Slice",
  initialState: {
    relevantCourseWork: localStorage.getItem("relevantCourseWork"),
    languages: localStorage.getItem("languages"),
    frameworks: localStorage.getItem("frameworks"),
    database: localStorage.getItem("database"),
    devtools: localStorage.getItem("devtools"),
    software: localStorage.getItem("software"),
  },
  reducers: {
    setRelevantCourseWork: (state, action) => {
      state.relevantCourseWork = action.payload;
      localStorage.setItem("relevantCourseWork", action.payload);
    },
    setLanguages: (state, action) => {
      state.languages = action.payload;
      localStorage.setItem("languages", action.payload);
    },
    setFrameworks: (state, action) => {
      state.frameworks = action.payload;
      localStorage.setItem("frameworks", action.payload);
    },
    setDatabase: (state, action) => {
      state.database = action.payload;
      localStorage.setItem("database", action.payload);
    },
    setDevtools: (state, action) => {
      state.devtools = action.payload;
      localStorage.setItem("devtools", action.payload);
    },
    setSoftware: (state, action) => {
      state.software = action.payload;
      localStorage.setItem("software", action.payload);
    },
  },
});

export const {
  relevantCourseWork,
  languages,
  frameworks,
  database,
  devtools,
  software,
} = skillsSlice.actions;

export default skillsSlice.reducer;