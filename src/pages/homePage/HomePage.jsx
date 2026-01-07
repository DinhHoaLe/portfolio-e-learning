import React from "react";
import SectionComponent from "./components/SectionComponent";
import CareerBannerComponent from "./components/CareerBannerComponent";
import CourseSectionComponent from "./components/CouresSectionComponent";
import IntroduceComponent from "./components/IntroduceComponent";
import BusinessSectionComponent from "./components/BusinessSectionComponent";
import StudentSoriesComponent from "./components/StudentSoriesComponent";
import CerrerAcceleratorSectionComponent from "./components/CerrerAcceleratorSectionComponent";
import PopularSkillSectionComponent from "./components/PopularSkillSectionComponent";

const HomePage = () => {
  return (
    <>
      <IntroduceComponent />
      <SectionComponent />
      <CareerBannerComponent />
      <CourseSectionComponent />
      <StudentSoriesComponent />
      <CerrerAcceleratorSectionComponent />
      <BusinessSectionComponent />
      <PopularSkillSectionComponent />
    </>
  );
};

export default HomePage;
