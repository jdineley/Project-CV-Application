import React from "react";
import styled from "styled-components";
import Section from "../Utils/Section";
import Subsection from "../Utils/Subsection";
import Personal from "./Personal";
import layoutConfig from "../../layout/layoutConfig";

const Sidebar = ({ personalInfo, layout }) => {
  return (
    <SidebarWrapper layout={layout}>
      <Photo src={personalInfo.photo} />
      
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
  grid-column:  ${(props) => layoutConfig.layoutStyles[props.layout].SideBarWrapper['grid-column']};
  grid-row:  ${(props) => layoutConfig.layoutStyles[props.layout].SideBarWrapper['grid-row']};
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.lightSecondary};
`;

const Photo = styled.img`
  margin-bottom: 2rem;
`;

export default Sidebar;
