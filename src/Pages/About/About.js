import React from "react";
import BackHomeButton from "../../Components/BackHomeButton/BackHomeButton";
import HomePageLayout from "../../Components/HomePageLayout/HomePageLayout";

export default function About() {
  return (
    <HomePageLayout>
      <BackHomeButton />
      <p>Reversed Spider Solitaire</p>
    </HomePageLayout>
  );
}
