import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import Training from "../Training/Training";
import Internship from "../Internship/Internship";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import CourseWork from "../CourseWork/CourseWork";

function DisplayPage() {
  const currentPageNumber = useSelector((state) => state.PageSlice.pageNumber);
  const handleShowPage = () => {
    switch (currentPageNumber) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <Education />;
      case 2:
        return <CourseWork />;
      case 3:
        return <Skills />;
      case 4:
        return <Training />;
      case 5:
        return <Internship />;
      case 6:
        return <Experience />;
      case 7:
        return <Projects />;
    }
  };
  return (
    <Container
      style={{ border: "2px solid green" }}
      className="bg-white py-4 h-full overflow-auto"
    >
        {handleShowPage()}
    </Container>
  );
}

export default DisplayPage;
