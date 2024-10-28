import React, { useState } from 'react'
import styled from 'styled-components';
import { projects } from '../../data/constants';
import ProjectCard from "../Cards/ProjectCard";

const Container = styled.div`
    background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
    );
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    z-index: 1;
    gap: 28px;
    align-items center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

const Wrapper = styled.div`
    max-width: 1350px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 12px;
    padding: 10px 0px 100px 0px;
`;


const Title = styled.div`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
    color: ${({theme}) => theme.text_primary};

    @media (max-width: 768px){
    margin-top: 12px;
    font-size: 32px;
    }
`;

// The screen keyword is used to specify that the styles should only apply to screen devices like computers, tablets, and smartphones.
//Without specifying '@media screen and', this media query can apply to different types of media, 
//such as screens, print, and others, depending on the context.
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleGroup = styled.div`
display: flex;
border: 1.5px solid ${({ theme }) => theme.primary};
color: ${({ theme }) => theme.primary};
font-size: 16px;
border-radius: 12px;
font-weight 500;
margin: 22px 0;
@media (max-width: 768px){
    font-size: 12px;
}
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    cursor: pointer;
    border-radius: 6px;

    ${({active, theme}) => 
        active &&
        `
            background-color: ${theme.primary + 20};
        `}

    &:hover{
        background-color: ${({theme}) => theme.primary + 8};
    }

    @media (max-width: 768px){
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects = ()=>{
    const [toggle, setToggle] = useState("all");
    return(
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    I have worked on wide range of projects. 
                    Here are some of my projects.
                </Desc>
                <ToggleGroup>
                    {toggle === "all" ? ( 
                    <ToggleButton active value="all" onClick={() => setToggle("all")}>
                        ALL
                        </ToggleButton>
                    ) : (
                        <ToggleButton value="all"onClick={() => setToggle("all")}>
                            ALL
                        </ToggleButton>
                    )}
                    <Divider/>
                    {toggle === "web app" ? ( 
                        <ToggleButton active onClick={() => setToggle("web app")}> 
                        WEB APPS
                        </ToggleButton>
                    ) : (
                        <ToggleButton onClick={() => setToggle("web app")}> 
                        WEB APPS
                        </ToggleButton>
                    )}
                    
                    <Divider/>
                    {
                    /* //If toggle is equal to "all", the ToggleButton component with the active prop is rendered, meaning it appears as the active/selected button.
//If toggle is not equal to "all", the ToggleButton component is rendered without the active prop, so it appears inactive.
//Purpose of active Prop: The active prop is likely being used by ToggleButton to apply specific styles or behaviors when the button is "active." This is common for buttons or tabs to visually indicate the current selection. */}
                    {toggle === "front end" ? ( 
                        <ToggleButton active onClick={() => setToggle("front end")}> 
                        FRONT END
                        </ToggleButton>
                    ) : (
                        <ToggleButton onClick={() => setToggle("front end")}> 
                        FRONT END
                        </ToggleButton>
                    )}
                    <Divider/> 
                </ToggleGroup>
                <CardContainer>
                    {toggle === "all" &&
                    projects.map((project) => (
                    <ProjectCard/>
                    ))}
                    {projects
                    .filter((item) => item.category === toggle)
                    .map((project) =>(
                        <ProjectCard/>
                    ))}
                
                </CardContainer>
            </Wrapper>
        </Container>
    )
};

export default Projects;