import React from "react";
import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";
import Section from "../Utils/Section";
import layoutStyles from "../../layout/layout";

const Content = ({ personalInfo, experience, education, layout }) => {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
  ));

  const educationItems = education.map((educationItem) => (
    <EducationItem key={educationItem.id} educationItem={educationItem} />
  ));

  return (
    <ContentWrapper layout={layout}>
      <Section title="Description" contrastTitle>
        <Description>{personalInfo.description}</Description>
      </Section>
      <Section title="Experience" direction="column" contrastTitle>
        {experienceItems}
      </Section>
      <Section title="Education" direction="column" contrastTitle>
        {educationItems}
      </Section>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  grid-column:  ${(props) => layoutStyles[props.layout].ContentWrapper['grid-column']};
  grid-row:  ${(props) => layoutStyles[props.layout].ContentWrapper['grid-row']};
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.light};
`;

const Description = styled.div`
  font-style: italic;
`;

export default Content;
