import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Photo from "./Photo"
import layoutConfig from "../../layout/layoutConfig";

//react-to-print package prints only class components

class CVPreview extends Component {
  render() {
    const { cv, layout } = this.props;

    console.log(layoutConfig.layoutComponents[layout].SideBar)
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
        {layoutConfig.layoutComponents[layout].SideBar && <Sidebar personalInfo={cv.personalInfo} layout={layout} />}
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
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;



// grid-template-columns: ${(props) => layoutStyles[props.layout].CVPreviewWrapper['grid-template-columns']};
// grid-template-rows: ${(props) => layoutStyles[props.layout].CVPreviewWrapper['grid-template-rows']};

