import React from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';

const Container = styled.div`
    display: flex;
    //flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items center;
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

//Creating Grids: When combined with other flex properties, flex-wrap: wrap; can be used to 
//create flexible grid layouts where items automatically move to the next row or column as needed.
const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;

`;

//cards properties
const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${(theme)=>theme.card};
  border: 0.1px solid #854ce6; 
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
    return (
        <Container id="skills">
            <Wrapper>
            <Title>Technical Skills</Title>
            <Desc>
                Here are skills on which I have been working on for the past 4 years.
            </Desc>
            <SkillsContainer>
                {skills.map((item) =>(
                <Skill>
                    <SkillTitle>{item.title}</SkillTitle>
                    <SkillList>
                        {item.skills.map((skill)=>(
                            <SkillItem>
                                <SkillImage src={skill.image}/>
                                {skill.name}
                            </SkillItem>
                        ))}
                    </SkillList>
                </Skill>
                ))}
            </SkillsContainer>
            </Wrapper>
        </Container>
    );
}

export default Skills;