import { TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
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
} from "../../Context/PersonalInfoSlice";

function PersonalInfo() {
  const personalInfoSlice = useSelector((state) => state.PersonalInfoSlice);
  console.log(personalInfoSlice);
  const dispatch = useDispatch();
  const handleChange = (event, type) => {
    const input = event.target.value;
    switch (type) {
        case "city":
          dispatch(setCity(input));
        break;
        case "codingNinja":
          dispatch(setCodingNinja(input));
        break;
        case "contact":
          dispatch(setContact(input));
        break;
        case "email":
          dispatch(setEmail(input));
        break;
        case "firstName":
          dispatch(setFirstName(input));
        break;
        case "github":
          dispatch(setGithub(input));
        break;
        case "lastName":
          dispatch(setLastName(input));
        break;
        case "leetcode":
          dispatch(setLeetcode(input));
        break;
        case "linkedIn":
          dispatch(setLinkedIn(input));
        break;
        case "pincode":
          dispatch(setPincode(input));
        break;
        case "state":
          dispatch(setState(input));
        break;
      }
  };

  return (
      <form className="flex flex-col gap-4">
      <TextField
        label="First Name"
        inputMode="text"
        type="text"
        autoCapitalize="true"
        value={personalInfoSlice.firstName || ""}
        inputProps={{maxLength : 10}}
        required
        onChange={(event) => handleChange(event, "firstName")}
      />
      <TextField
        label="Last Name"
        inputMode="text"
        type="text"
        autoCapitalize="true"
        value={personalInfoSlice.lastName || ""}
        inputProps={{maxLength : 10}}
        required
        onChange={(event) => handleChange(event, "lastName")}
      />
      <TextField
        value={personalInfoSlice.city || ""}
        inputProps={{maxLength : 10}}
        label="City"
        inputMode="text"
        type="text"
        autoCapitalize="true"
        required
        onChange={(event) => handleChange(event, "city")}
      />
      <TextField
        value={personalInfoSlice.state || ""}
        label="State"
        inputMode="text"
        type="text"
        required
        onChange={(event) => handleChange(event, "state")}
      />
      <TextField
        value={personalInfoSlice.pincode || ""}
        label="Pincode"
        inputMode="number"
        type="number"
        required
        onChange={(event) => handleChange(event, "pincode")}
      />
      <TextField
        label="Mobile Number"
        inputMode="number"
        type="number"
        value={personalInfoSlice.contact || ""}
        required
        onChange={(event) => handleChange(event, "contact")}
      />

      <TextField
        value={personalInfoSlice.email || ""}
        label="Email"
        inputMode="email"
        type="email"
        required
        onChange={(event) => handleChange(event, "email")}
      />

      <TextField
        value={personalInfoSlice.linkedIn || ""}
        label="LinkedIn Profile URL"
        inputMode="url"
        type="url"
        onChange={(event) => handleChange(event, "linkedIn")}
      />
      <TextField
        value={personalInfoSlice.codingNinja || ""}
        label="Coding-Ninja Profile URL"
        inputMode="url"
        type="url"

        onChange={(event) => handleChange(event, "codingNinja")}
      />
      <TextField
        value={personalInfoSlice.github || ""}
        label="Github Profile URL"
        inputMode="url"
        type="url"

        onChange={(event) => handleChange(event, "github")}
      />
      <TextField
        value={personalInfoSlice.leetcode || ""}
        label="Leetcode Profile URL"
        inputMode="url"
        type="url"
        onChange={(event) => handleChange(event, "leetcode")}
      />
      </form>
    
  );
}

export default PersonalInfo;
