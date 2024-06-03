import { configureStore } from "@reduxjs/toolkit";
import PersonalInfoSlice from "./Context/PersonalInfoSlice";
import EducationSlice from "./Context/EducationSlice";
import ExperienceSlice from "./Context/ExperienceSlice";
import InternshipSlice from "./Context/InternshipSlice";
import ProjectsSlice from "./Context/ProjectsSlice";
import SkillsSlice from "./Context/SkillsSlice";
import TrainingSlice from "./Context/TrainingSlice";
import PageSlice from "./Context/PageSlice";

const store = configureStore({
  reducer: {
    PersonalInfoSlice: PersonalInfoSlice,
    EducationSlice: EducationSlice,
    ExperienceSlice: ExperienceSlice,
    InternshipSlice: InternshipSlice,
    ProjectsSlice: ProjectsSlice,
    SkillsSlice: SkillsSlice,
    TrainingSlice: TrainingSlice,
    PageSlice : PageSlice
  },
});

export { store };
