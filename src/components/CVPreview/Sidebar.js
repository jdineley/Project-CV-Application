import React from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
import Subsection from "../Utils/Subsection";
import Personal from "./Personal";
import layoutStyles from "../../layout/layout";

const Sidebar = ({ personalInfo, layout }) => {
  return (
    <SidebarWrapper>
      <Photo src={personalInfo.photo} />
      test
      <Personal layout={layout} personalInfo={personalInfo} />
      {/* <Section title="Personal Details" contrastTitle direction="column">
        <Subsection title="Address">{personalInfo.address}</Subsection>
        <Subsection title="Phone Number">{personalInfo.phoneNumber}</Subsection>
        <Subsection title="Email">{personalInfo.email}</Subsection>
      </Section> */}
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.lightSecondary};
`;

const Photo = styled.img`
  margin-bottom: 2rem;
`;

export default Sidebar;
