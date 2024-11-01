import React from "react";
import styled from "styled-components";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { experiences } from "../../data/constants";
import ExperienceCard from "../Cards/ExperienceCard"

const Container = styled.div`
    margin-top: 100px;
    display: flex;
    //flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items center;
    padding: 40px 0px 80px 0px;

    @media(max-width: 960px){
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    max-width: 1100px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 12px;
`;

const Title = styled.div`
    font-size: 52px;
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

const TimeLineSection = styled.div`
    width: 100%;
    max-width: 100px;
    margin-top: 10px;
    display: flex;
     flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 12px;

`;

const Experience = () => {
    return (
    <Container id="experience">
        <Wrapper>
            <Title>Experience</Title>
            <Desc>Here are some of my projects</Desc>
            <TimeLineSection>
                <Timeline>
                    {experiences.map((experience, index) =>(
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot variant="outlined" color="secondary"/>
                            {index !== experiences.length - 1 && <TimelineConnector/>}
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: "12px", px: 2}}>
                                <ExperienceCard experience ={experience}/>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </TimeLineSection>
        </Wrapper>
    </Container>
)};

export default Experience;