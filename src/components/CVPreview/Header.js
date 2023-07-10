import React from "react";
import styled from "styled-components";
import layoutConfig from "../../layout/layoutConfig";
import Personal from "./Personal";
import Photo from "./Photo";

const CVHeader = ({ personalInfo, layout }) => {
  const { firstName, lastName, title } = personalInfo;
  console.log(layout)
  const HeaderType = layoutConfig.layoutComponents[layout].Header

  console.log(HeaderType)


  return (
    <CVHeaderWrapper layout={layout} HeaderType={HeaderType}>
      <NameWrapper layout={layout} HeaderType={HeaderType}>
        <h1>
          {firstName} {lastName}
        </h1>
      </NameWrapper>
      <TitleWrapper HeaderType={HeaderType}>
        <p>{title}</p>
      </TitleWrapper>
      {layoutConfig.HeaderTypes[HeaderType].Personal && <Personal layout={layout} personalInfo={personalInfo}/>}
      {layoutConfig.HeaderTypes[HeaderType].Photo && <Photo HeaderType={HeaderType} layout={layout} personalInfo={personalInfo}/>}
    </CVHeaderWrapper>
  );
};

const CVHeaderWrapper = styled.header`
  grid-column: ${(props) => layoutConfig.layoutStyles[props.layout].HeaderWrapper['grid-column']};
  grid-row: ${(props) => layoutConfig.layoutStyles[props.layout].HeaderWrapper['grid-row']};
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.light};
  padding: 20px;
  `;

  const NameWrapper = styled.div`
    grid-column: ${(props) => layoutConfig.HeaderTypes[props.HeaderType].NameWrapper['grid-column']};
    grid-row: ${(props) => layoutConfig.HeaderTypes[props.HeaderType].NameWrapper['grid-row']};
  `

  const TitleWrapper = styled.div`
    grid-column: ${(props) => layoutConfig.HeaderTypes[props.HeaderType].TitleWrapper['grid-column']};
    grid-row: ${(props) => layoutConfig.HeaderTypes[props.HeaderType].TitleWrapper['grid-row']};
  `
  
  
  export default CVHeader;
  
  // grid-column:  ${(props) => layoutStyles[props.layout].CVHeaderWrapper['grid-column']};
  // grid-row:  ${(props) => layoutStyles[props.layout].CVHeaderWrapper['grid-row']};