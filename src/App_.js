
// https://prawira.medium.com/react-conditional-import-conditional-css-import-110cc58e0da6
// https://react.dev/reference/react/lazy
// https://css-tricks.com/different-ways-to-write-css-in-react/
// https://stackoverflow.com/questions/66531412/dynamically-load-and-unload-content-of-css-file-in-javascript-react
import React, { useState, useRef } from 'react'
import styled from 'styled-components'
// import Title from './components/Title.js'
// import Photo from './components/Photo.js';
// import Skills from './components/CVForm/Skills.js';
// import Education from './components/CVForm/Education.js';
// import ProfSummary from './components/CVForm/ProfSummary.js';
// import WorkHistory from './components/CVForm/WorkHistory.js';
import Form from './components/CVForm/Form.js';
import TrustedLayout from './CVLayouts/TrustedLayout.js';
import ContemporaryLayout from './CVLayouts/ContemporaryLayout.js';
import FreshLayout from './CVLayouts/FreshLayout.js';
import { themesArray } from './enum';

import './styles/generalStyles.css'




//STEP 3
//wrap the main components inside of the ThemeSelector
// ReactDOM.render(
//   <ThemeSelector>
//     <App>
//   </ThemeSelector>,
//   document.getElementById('root')
// );

function App() {
  const [personalData, setPersonalData] = React.useState(
    {
        firstName: "",
        lastName: "",
        mobile: "",
        road: "",
        city: "",
        postCode: "",
        image: ""
    }
  )
  
  const [theme, SetTheme] = React.useState('trusted')

  const {current = themesArray} = useRef(themesArray)

  console.log(personalData )

  function handleThemeSelect(e) {
      const { textContent } = e.target;
      SetTheme(textContent)
  }

  function handleChange(e) {
    console.log(e.target.name)
    const {name, value, type} = e.target

    if (type === 'file') {
      handleChangeFile(e)
      return
    }

    setPersonalData(prevPersonalData => {
      return {
        ...prevPersonalData,
        [name]: value
      }
    })
  }

  const handleChangeFile = (e) => {
    const { name } = e.target
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      setPersonalData((prevState) => ({
        ...prevState,
          [name]: reader.result,
      }))
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className='app-container'>
      <Form handleChange={handleChange} themesArray={themesArray} handleThemeSelect={handleThemeSelect}/>
      
        <div className='cv-container'>
          {/* <Photo personalData={personalData}/>
          <Title personalData={personalData}/>
          <Skills />
          <Education />
          <ProfSummary />
          <WorkHistory /> */}
          <h1>Hello World</h1>
          {theme === 'trusted' && <TrustedLayout/>}
          {theme === 'fresh' && <FreshLayout/>}
          {theme === 'contemporary' && <ContemporaryLayout/>}
        </div>
      

    </div>
  );
}

export default App;




      // <fieldset>
      //           <legend>Current employment status</legend>
                
      //           <input 
      //               type="radio"
      //               id="unemployed"
      //               name="employment"
      //               value="unemployed"
      //               checked={user.employment === "unemployed"}
      //               onChange={handleChange}
      //           />
      //           <label htmlFor="unemployed">Unemployed</label>
      //           <br />
                
      //           <input 
      //               type="radio"
      //               id="part-time"
      //               name="employment"
      //               value="part-time"
      //               checked={user.employment === "part-time"}
      //               onChange={handleChange}
      //           />
      //           <label htmlFor="part-time">Part-time</label>
      //           <br />
                
      //           <input 
      //               type="radio"
      //               id="full-time"
      //               name="employment"
      //               value="full-time"
      //               checked={user.employment === "full-time"}
      //               onChange={handleChange}
      //           />
      //           <label htmlFor="full-time">Full-time</label>
      //           <br />
      //       </fieldset>