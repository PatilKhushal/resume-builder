import React from "react";
import Stepper from "@mui/material/Stepper";
import { useSelector } from "react-redux";
import { Container, Step, StepLabel, Typography, useMediaQuery } from "@mui/material";

function StepperComponent() {
  const pageNumber = useSelector((state) => state.PageSlice.pageNumber);
    const stepProps = ["Personal Information", "Education", "Relevant Course-Work", "Technical Skills", "Training", "Internship", "Experience", "Projects"];
    const isTablet = useMediaQuery('(max-width:768px)')
  return (
    <Container style={{border : "2px solid red"}} className="py-4">
        <Stepper activeStep={pageNumber}>
      {stepProps.map((element,index) =>
          <Step key={index}>
            <StepLabel><Typography variant="caption" className="text-white" component={"h1"}>{element}</Typography></StepLabel>
          </Step>)}
    </Stepper>
    </Container>
  );
}

export default StepperComponent;
