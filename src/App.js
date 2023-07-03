
// https://prawira.medium.com/react-conditional-import-conditional-css-import-110cc58e0da6
// https://react.dev/reference/react/lazy
// https://css-tricks.com/different-ways-to-write-css-in-react/
import React from 'react';
import Title from './components/Title.js'
import Photo from './components/Photo.js';
import Skills from './components/Skills.js';
import Education from './components/Education.js';
import ProfSummary from './components/ProfSummary.js';
import WorkHistory from './components/WorkHistory.js';
import Form from './components/Form.js';

import './styles/generalStyles.css'

import { TYPE_OF_THEME } from './enum';
// import { toHaveValue } from '@testing-library/jest-dom/matchers.js';


//STEP 1:
//create components using React.lazy
const ContemporaryTheme = React.lazy(() => import('./styles/Contemp_Theme'));
const FreshTheme = React.lazy(() => import('./styles/Fresh_Theme'));
const TrustedTheme = React.lazy(() => import('./styles/Trusted_Theme'));


//STEP 2:
//create a parent component that will load the components conditionally using React.Suspense
const ThemeSelector = ({ children }) => {
  const CHOSEN_THEME = localStorage.getItem('TYPE_OF_THEME') || TYPE_OF_THEME.DEFAULT;
  return (
    <>
      <React.Suspense fallback={<></>}>
        {(CHOSEN_THEME === TYPE_OF_THEME.CONTEMPORARY) && <ContemporaryTheme />}
        {(CHOSEN_THEME === TYPE_OF_THEME.FRESH) && <FreshTheme />}
        {(CHOSEN_THEME === TYPE_OF_THEME.TRUSTED) && <TrustedTheme />}
      </React.Suspense>
      {children}
    </>
  )
}
  

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
  console.log(personalData)

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
      <Form handleChange={handleChange}/>
      <ThemeSelector>
        <div className='cv-container'>
          <Photo personalData={personalData}/>
          <Title personalData={personalData}/>
          <Skills />
          <Education />
          <ProfSummary />
          <WorkHistory />
        </div>
      </ThemeSelector>

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