import { createSlice } from "@reduxjs/toolkit";

const personalInfoSlice = createSlice({
  name: "PersonalInfo Slice",
  initialState: {
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName"),
    city: localStorage.getItem("city"),
    state: localStorage.getItem("state"),
    pincode: localStorage.getItem("pincode"),
    contact: localStorage.getItem("contact"),
    email: localStorage.getItem("email"),
    linkedIn: localStorage.getItem("linkedIn"),
    github: localStorage.getItem("github"),
    leetcode: localStorage.getItem("leetcode"),
    codingNinja: localStorage.getItem("codingNinja"),
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
      localStorage.setItem("firstName", action.payload);
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
      localStorage.setItem("lastName", action.payload);
    },
    setCity: (state, action) => {
      state.city = action.payload;
      localStorage.setItem("city", action.payload);
    },
    setState: (state, action) => {
      state.state = action.payload;
      localStorage.setItem("state", action.payload);
    },
    setPincode: (state, action) => {
      state.pincode = action.payload;
      localStorage.setItem("pincode", action.payload);
    },
    setContact: (state, action) => {
      state.contact = action.payload;
      localStorage.setItem("contact", action.payload);
    },
    setEmail: (state, action) => {
      state.email = action.payload;
      localStorage.setItem("email", action.payload);
    },
    setLinkedIn: (state, action) => {
      state.linkedIn = action.payload;
      localStorage.setItem("linkedIn", action.payload);
    },
    setGithub: (state, action) => {
      state.github = action.payload;
      localStorage.setItem("github", action.payload);
    },
    setLeetcode: (state, action) => {
      state.leetcode = action.payload;
      localStorage.setItem("leetcode", action.payload);
    },
    setCodingNinja: (state, action) => {
      state.codingNinja = action.payload;
      localStorage.setItem("codingNinja", action.payload);
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setCity,
  setState,
  setPincode,
  setContact,
  setEmail,
  setLinkedIn,
  setGithub,
  setLeetcode,
  setCodingNinja,
} = personalInfoSlice.actions;

export default personalInfoSlice.reducer;
