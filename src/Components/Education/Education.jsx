import { Divider, FormLabel, TextField, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOtherEducation, setEducation } from "../../Context/EducationSlice";

function Education() {
  const education = useSelector((state) => state.EducationSlice.education);
  const dispatch = useDispatch();

  const handleChange = (event, type, index) => {
    const input = event.target.value;
    switch (type) {
      case "courseName":
        dispatch(
          setEducation({
            index,
            updatedData: [
              {courseName: input}
            ],
          })
        );
        break;
      case "branch":
        dispatch(
          setEducation({
            index,
            updatedData: [
              {branch: input}
            ],
          })
        );
        break;
      case "percentage":
        dispatch(
          setEducation({
            index,
            updatedData: [
              {percentage: input}
            ],
          })
        );
        break;
      case "instituteName":
        dispatch(
          setEducation({
            index,
            updatedData: [
              {instituteName: input}
            ],
          })
        );
        break;
      case "instituteCity":
        dispatch(
          setEducation({
            index,
            updatedData: [
              {instituteCity: input}
            ],
          })
        );
        break;
      case "instituteState":
        dispatch(
          setEducation({
            index,
            updatedData: [
              {instituteState: input}
            ],
          })
        );
        break;
      case "startYear":
        dispatch(
          setEducation({
            index,
            updatedData: [
              {startYear: input}
            ],
          })
        );
        break;
      case "endYear":
        dispatch(
          setEducation({
            index,
            updatedData: [
              {endYear: input}
            ],
          })
        );
        break;
    }
  };

  return (
    <form className="flex flex-col gap-4">
      {education.map((element, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 relative p-6"
          style={{ border: "2px solid red" }}
        >
          <TextField
            label="Course"
            inputMode="text"
            type="text"
            autoCapitalize="true"
            value={element.courseName}
            inputProps={{ maxLength: 20 }}
            required
            onChange={(event) => handleChange(event, "courseName", index)}
          />
          <TextField
            label="Branch"
            inputMode="text"
            type="text"
            autoCapitalize="true"
            value={element.branch}
            inputProps={{ maxLength: 20 }}
            required
            onChange={(event) => handleChange(event, "branch", index)}
          />
          <TextField
            value={element.percentage}
            inputProps={{ max: 100, min: 40 }}
            label="Percentage/CGPA"
            inputMode="number"
            type="number"
            required
            onChange={(event) => handleChange(event, "percentage", index)}
          />
          <TextField
            value={element.instituteName}
            label="Institute Name"
            inputMode="text"
            type="text"
            required
            onChange={(event) => handleChange(event, "instituteName", index)}
          />
          <TextField
            value={element.instituteCity}
            label="Institute City"
            inputMode="text"
            type="text"
            required
            onChange={(event) => handleChange(event, "instituteCity", index)}
          />
          <TextField
            value={element.instituteState}
            label="Institute State"
            inputMode="text"
            type="text"
            required
            onChange={(event) => handleChange(event, "instituteState", index)}
          />
          <div className="flex justify-between gap-8">
            <div className="w-full flex items-center gap-2">
              <FormLabel>Start Year</FormLabel>
              <TextField
                inputMode="date"
                type="date"
                required
                value={element.startYear}
                onChange={(event) => handleChange(event, "startYear", index)}
                className="flex-grow"
              />
            </div>
            <div className="w-full flex items-center gap-2">
              <FormLabel>End Year</FormLabel>
              <TextField
                inputMode="date"
                type="date"
                required
                value={element.endYear}
                onChange={(event) => handleChange(event, "endYear", index)}
                className="flex-grow"
              />
            </div>
          </div>
          <div className="absolute text-black right-0 top-0 px-2 rounded-full">
            X
          </div>
        </div>
      ))}

      <Button
        variant="contained"
        onClick={() => {
          dispatch(addOtherEducation());
        }}
      >
        Add Other Education
      </Button>
    </form>
  );
}

export default Education;
