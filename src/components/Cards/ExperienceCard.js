import React from "react";
import styled from "styled-components";

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;

    &:hover{
        cursor: pointer;
        opacity?: 0.8;
    }
`;

//box-shadow: offset-x offset-y blur-radius spread-radius color;
//10px (Blur Radius)://This value controls the blur effect of the shadow.
//The rgba color format allows you to define colors using red, green, and blue values,
// along with an alpha channel (opacity).
//rgba(0, 0, 0, 0.1) stands for a black color with 0.1 opacity (10% opacity)

//transition: This property defines how CSS properties change over time, allowing for smooth transitions when a property value changes (e.g., when the element is hovered over).
//all: Specifies that the transition should apply to all animatable properties that change (in this case, box-shadow and transform).
//0.3s: Specifies the duration of the transition, which is 0.3 seconds. This means the transition will take 0.3 seconds to complete.
//ease-in-out: This is the timing function that controls the speed of the transition.
//ease-in-out: The transition starts slowly, speeds up in the middle, and then slows down at the end, creating a smooth and natural motion.

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;

    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }

    &: hover ${Document}{
        display: flex;
    }
        
    @media(max-width: 768px){
        padding: 10px
        gap: 8px;
        width: 300px;
    }

    border: 0.1px solid #306ee8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px ;
`;

const Top = styled.div`
    display: flex;
    gap: 12px;
    width: 100%;

`;

const Logo = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;

    @media(max-width: 768px){
        height: 40px;
    }
`;

const Body = styled.div`
    dispay: flex;
    flex-direction: column;
    width: 100%;
`;

const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({theme}) => theme.text_primary + 99};

    @media (max-width: 768px){
        font-size: 14px;
    }
`;

const Company = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${({theme}) => theme.text_secondary + 99};

    @media (max-width: 768px){
        font-size: 12px;
    }
`;

const Duration = styled.div`
    font-size: 12px;
    font-weight: 400px;
    color: ${({theme}) => theme.text_secondary + 80};

    @media (max-width: 768px){
        font-size: 10px;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({theme}) => theme.text_primary + 99};
    margin-bottom: 10px;

    @media (max-width: 768px){
        font-size: 12px;
    }

`;

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: 10px;

`;

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({theme}) => theme.text_primary + 99};
    margin-bottom: 10px;

    @media (max-width: 768px){
        font-size: 12px;
    }
`;


//transform: This property allows you to apply 2D or 3D transformations to an element.
//translateY(-5px): This function moves the element vertically by -5 pixels.
//A negative value (-5px) moves the element up.
//This creates an effect where the element seems to "lift" slightly off the page when hovered over.
const ExperienceCard = ({experience}) => {
    return (
    <Card>
    <Top>
        <Logo src={experience.img}/>
        <Body>
            <Role>{experience.role}</Role>
            <Company>{experience.company}</Company>
            <Duration>{experience.date}</Duration>
        </Body>
    </Top>
    <Description>

        {experience.desc}
        {experience?.skills && (
            <>
            <br/>
            <Skills>
                <b>Skills:</b>
                <ItemWrapper>
                    {experience.skills.map((skill)=>(
                        <Skill>{skill}</Skill>
                    ))}
                </ItemWrapper>
            </Skills>
            </>
        )}
    </Description>
    {/* if document present then only show here */}
    {experience.doc && (<a href={experience.doc} target="new"><Document src={experience.doc}/></a>)}
    </Card>
    
    );
}

export default ExperienceCard;