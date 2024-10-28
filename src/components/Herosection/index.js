import React from 'react';
import styled from 'styled-components';
import {Bio} from "../../data/constants"
import Typewriter from "typewriter-effect";
import HeroBgAnimation from '../HeroBgAnimation/index';
import HeroImg from "../../images/HeroImage.jpg"


//Sets the position of the HeroContainer to relative, 
//which allows for absolutely positioned child elements to be positioned relative to this container.

//The clip-path property is used to create a custom shape for the HeroContainer.
//polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%) defines a polygon shape that clips the
// HeroContainer to a specific shape, in this case, a slightly slanted trapezoid.

const HeroContainer = styled.div`
    background-color: ${({theme})=> theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;

    @media screen and (max-width: 960px){
        padding: 66px 16px;
    }
    
    @media screen and (max-width: 640px){
        padding: 32px 16px;
    }
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

`; 

//Positions the HeroBg element relative to its closest positioned ancestor 
//(the nearest ancestor that has a position other than static).

//Positioning Properties (top: 50%;, right: 0;, bottom: 0;, left: 50%;)

//Limits the width of the HeroBg to a maximum of 1360px, ensuring it doesn't get too wide on larger screens.

//overflow: hidden;
//Prevents any content that overflows the boundaries of the HeroBg from being visible
const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  width: 80%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

//-webkit- is a vendor prefix for WebKit-based browsers (like older versions of Safari and Chrome). 
//This prefix ensures compatibility with these browsers when the CSS transform property was not yet standardized.
//Modern browsers typically no longer require this prefix, but it is sometimes included for backward compatibility.

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

//The order property is used in Flexbox layouts to control the order in which flex items appear. In this case, the HeroLeftContainer is initially given an order of 1,
// which means it will appear first relative to other flex items.

//Adds a 6px gap between the flex items inside the HeroLeftContainer.

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
    @media (max-width: 640px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  gap: 12px;

  @media (max-width: 960px) {
    order: 1;
    display: flex;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
    order: 1;
    
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

     &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    

    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const Hero = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Title>
                            Hi, I am <br/>
                            {Bio.name}
                        </Title>
                        <TextLoop>
                            Profession:
                            <Span>
                                <Typewriter
                                    options={{
                                    strings: Bio.roles,
                                    autoStart: true,
                                    loop: true,
                                }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target="dispaly">
                            Check Resume
                        </ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer>
                        <Image src={HeroImg} alt="Hero"/>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
}

export default Hero;