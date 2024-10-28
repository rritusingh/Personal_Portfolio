import React from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";

// If an element originally appears at a specific spot on the page, applying transform: translateY(-10px); 
//shifts it 10 pixels higher on the screen. This effect is often used for animations
const Card = styled.div`
width: 330px;
height: 490px;
background-color: ${({theme}) => theme.card};
cursor: pointer;
border-radis: 10px;
box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
overflow: hidden;
transition: all 0.5s ease-in-out;
padding: 26px 20px;
display: flex;
flex-direction: column;
gap: 14px;

&: hover{

    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
    filter: brightness(1.1);
}
`;
//object-fit Property: This property specifies how an image or video should scale and fit within its container.
const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({theme}) => theme.white};
    border-radius: 10px;;
    object-fit: cover;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
    align-items: center;
`;

const Tag = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: ${({theme}) => theme.primary};
    background-color: ${({theme}) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`;

//gap Property: Defines the amount of space between grid items in a CSS Grid layout or between flex items in a Flexbox layout.
const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

// -webkit-line-clamp: 3;:
// Limits the content to 3 lines. If the content exceeds 3 lines, it will be truncated.
// This property only works in combination with display: -webkit-box and -webkit-box-orient: vertical.

// -webkit-box-orient: vertical;:
// Sets the box's orientation to vertical, allowing the line clamp to be applied vertically (line by line).

// text-overflow: ellipsis;:
// Adds an ellipsis (...) at the point where the text overflows, indicating there’s more content that’s been truncated.

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const ProjectCard = ({projects}) => {
    return (
        <Card>
        {/* <Image src={projects.image}/> */}
            <Tags>
                {projects.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{projects.title}</Title>
                <Date>{projects.date}</Date>
                <Description>{projects.description}</Description>
            </Details>
            
        </Card>
    );

};

export default ProjectCard;