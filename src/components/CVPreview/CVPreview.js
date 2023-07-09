import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Photo from "./Photo"
import layoutStyles from "../../layout/layout";

//react-to-print package prints only class components

class CVPreview extends Component {
  render() {
    const { cv, layout } = this.props;

    return (
      <CVPreviewWrapper layout={layout}>
        <Header personalInfo={cv.personalInfo} layout={layout}/>
        {/* {!layout.Sidebar && <Photo personalInfo={cv.personalInfo} layout={layout}/>} */}
        {/* <Photo personalInfo={cv.personalInfo} layout={layout}/> */}
        <Content
          personalInfo={cv.personalInfo}
          experience={cv.experience}
          education={cv.education}
          layout={layout} 
        />
        {/* {layout.Sidebar && <Sidebar personalInfo={cv.personalInfo} layout={layout} />} */}
        <Sidebar personalInfo={cv.personalInfo} layout={layout} />
      </CVPreviewWrapper>
    );
  }
}

export default CVPreview;

const CVPreviewWrapper = styled.div`
  width: 210mm;
  height: 297mm;
  position: sticky;
  top: 10px;
  display: grid;
  grid-template-columns: ${(props) => layoutStyles[props.layout].CVPreviewWrapper['grid-template-columns']};
  grid-template-rows: ${(props) => layoutStyles[props.layout].CVPreviewWrapper['grid-template-rows']};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

