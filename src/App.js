
// https://prawira.medium.com/react-conditional-import-conditional-css-import-110cc58e0da6
// https://react.dev/reference/react/lazy
// https://css-tricks.com/different-ways-to-write-css-in-react/
import React from 'react';

import { TYPE_OF_THEME } from './enum';


//STEP 1:
//create components using React.lazy
const contemporaryStyle = React.lazy(() => import('./components/Contemporary'));
const frestStyle = React.lazy(() => import('./components/Fresh'));
const trustedStyle = React.lazy(() => import('./components/Trusted'));


//STEP 2:
//create a parent component that will load the components conditionally using React.Suspense
const ThemeSelector = ({ children }) => {
  const CHOSEN_THEME = localStorage.getItem('TYPE_OF_THEME') || TYPE_OF_THEME.DEFAULT;
  return (
    <>
      <React.Suspense fallback={<></>}>
        {(CHOSEN_THEME === TYPE_OF_THEME.LIGHT_MODE) && <LightTheme />}
        {(CHOSEN_THEME === TYPE_OF_THEME.DARK_MODE) && <DarkTheme />}
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
  return (
    <div className="App">
      <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={user.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={user.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={user.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
    </div>
  );
}

export default App;
