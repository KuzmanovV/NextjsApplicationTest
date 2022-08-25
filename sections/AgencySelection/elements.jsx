import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";
import { Card } from "~/collections";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
display: flex;
flex-direction: column;
align-items: center;
// margin: 2rem 0 6rem 0;
margin-top: 4rem
// margin-bottom: 4rem
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
color: black;
// margin-left: 11.125rem;
font-family: sans-serif;
text-align: center;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
margin: 0;
color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
margin: 0rem 0 0;
font-size: 1.5rem;
`;

export const StyledCard = styled((props) => <Card {...props} />)`
height: 28%;
`;


export const StyledSubContainer = styled(({ ...props }) => <div {...props} />)`
display: flex;
margin: 3rem;
width: 55%;
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
max-width: 22.03rem;
max-height: 65rem;
width: 100%;
height: 100%;
`;
