import React from "react";
import styled from "styled-components";
import layoutStyles from "../../layout/layout";
import Personal from "./Personal";

const CVHeader = ({ personalInfo, layout }) => {
  const { firstName, lastName, title } = personalInfo;

  return (
    <CVHeaderWrapper layout={layout}>
      <h1>
        {firstName} {lastName}
      </h1>
      <p>{title}</p>
      {layout === 'layout1' && <Personal layout={layout} personalInfo={personalInfo}/>}
    </CVHeaderWrapper>
  );
};

const CVHeaderWrapper = styled.header`
  display: ${(props) => layoutStyles[props.layout].CVHeaderWrapper['display']};
  grid-column:  ${(props) => layoutStyles[props.layout].CVHeaderWrapper['grid-column']};
  grid-row:  ${(props) => layoutStyles[props.layout].CVHeaderWrapper['grid-row']};
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.light};
`;


export default CVHeader;
