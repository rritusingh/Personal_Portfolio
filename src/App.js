import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import Hero from './components/Herosection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTheme } from 'styled-components';

//The import statement import { BrowserRouter as Router } from 'react-router-dom'; brings the BrowserRouter component
// into your React application and renames it as Router for ease of use. BrowserRouter is essential 
//for enabling client-side routing, allowing users to navigate between different pages or views in a single-page 
//React application without reloading the entire page.



const Body = styled.div`
  background-color: ${({theme}) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  `;

//This property applies two layered linear gradients as the background of the Wrapper component.
// The gradients create a smooth transition of colors across specific angles

//The gradient starts at an angle of 38.73 degrees.
//The color transitions from a semi-transparent magenta (rgba(204, 0, 187, 0.15)) at 0% 
//to fully transparent (rgba(201, 32, 184, 0)) at 50%.

//The polygon() function defines a shape by specifying the coordinates of its vertices in 
//percentage values relative to the element's size.

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    //ThemeProvider is a component provided by the styled-components library. 
    //It is used to pass down a theme object/prop to all styled components in the React component tree that are wrapped by ThemeProvider.
    //<Router>: Wraps the entire application, enabling routing functionality.
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Experience/>
          </Wrapper>
          {/* <Projects/> */}
          <Wrapper>
            <Education/>
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
