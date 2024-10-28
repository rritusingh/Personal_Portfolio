import React from 'react'
import styled, {useTheme} from 'styled-components';
import {Link as LinkR} from "react-router-dom";
import {DiCssdeck} from "react-icons/di";
import {FaBars} from "react-icons/fa";


//styled.div is a function provided by styled-components. It creates a styled <div> element.
//Nav is the name of the styled component, which you can now use as a React component in your JSX, 

//({ theme }) => theme.card_light is a function that uses destructuring to access the theme object from props and then applies 
//the card_light property of the theme as the background color.
const Nav = styled.div`

    background-color: ${({theme}) => theme.card_light};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
`;
//z-index is a crucial tool for managing the visual layering of elements on a webpage.

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    paading: 0 24px;
    max-width: 1200px;
`;

//The NavLogo component is styled based on a LinkR component, which is presumably 
//a custom component or an imported component from a routing library like react-router-dom
//By styling LinkR, the NavLogo component inherits all the properties and behaviors of the LinkR component, 
//but with additional styles applied.

//Aligns the NavLogo component to the start of its grid container

//Changes the cursor to a pointer when the user hovers over the NavLogo component, indicating that the element is clickable

//This is a media query that applies styles only when the screen width is 640px or less. Media queries are used to make the design responsive, 
//adapting the layout for different screen sizes.

const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    @media screen and (max-width: 640px){
        padding: 0 0px;
    }
`;
//The NavItems component is styled to represent an unordered list (<ul>) 
//that is typically used to contain navigation links in a menu or navbar

//Adds 32px of space between each list item inside the NavItems container. 
//The gap property is a flexbox feature that controls the space between child elements.

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

//The NavLink component is styled to represent an anchor tag (<a>) 

//Transition -- Adds a transition effect to the NavLink for all properties that change (such as color). The transition duration is 0.2s, and it uses the ease-in-out timing function, which starts the transition slowly, 
//speeds up in the middle, and then slows down again towards the end.
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const MobileMenuLinks = styled(LinkR)`
    color: ${({theme})=> theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover{
        color: ${({theme})=> theme.primary};
    }
`;

export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

const Navbar = () => {
    const[open, setOpen] = React.useState(false);
    const theme = useTheme();
    return (
        <Nav>
            <NavContainer>
                <NavLogo to="/">
                    <a style={
                        {
                            display: "flex",
                            alignItems: "center",
                            color: "white",
                            marginBottom: "20:",
                            cursor: "pointer",
                        }
                    }>
                        <DiCssdeck size="3rem" /><Span>Portfolio</Span>
                    </a>
                </NavLogo>
                <MobileIcon>
                    <FaBars onClick={()=>{
                        setOpen(!open)
                    }} />
                </MobileIcon>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                </NavItems>

            {
               open && (<MobileMenu open={open}>
                <MobileMenuLinks onClick={() => setOpen(!open)} href="#About">
                About
                </MobileMenuLinks>
                <MobileMenuLinks onClick={() => setOpen(!open)} href="#Skills">
                Skills
                </MobileMenuLinks>
                <MobileMenuLinks onClick={() => setOpen(!open)} href="#Experience">
                Experience
                </MobileMenuLinks>
                <MobileMenuLinks onClick={() => setOpen(!open)} href="#Projects">
                Projects
                </MobileMenuLinks>
                <MobileMenuLinks onClick={() => setOpen(!open)} href="#Education">
                Education
                </MobileMenuLinks>
                <GithubButton
                    style={{
                        padding: "10px 16px",
                       background: `${theme.primary}`,
                        color: "white",
                        width: "max-content",
                    }}
                    href="/"
                    target="_blank"
                >Github Profile
                </GithubButton>
               </MobileMenu> 
            )}
            <ButtonContainer>
                <GithubButton>Github Profile</GithubButton>
            </ButtonContainer>
            </NavContainer>
        </Nav>
    );
}

export default Navbar;