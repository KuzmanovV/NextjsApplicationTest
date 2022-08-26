import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";
import { Card } from "~/collections";

export const StyledDesktopContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin: 4rem 6rem;
    display: flex;
    }
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    margin-top: 4rem
    margin-bottom: 4rem;
    display: flex;
    }
    `

export const StyledBGContainer = styled(({ ...props }) => <div {...props} />)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
color: black;
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
export const StyledSubContainer = styled(({ ...props }) => <div {...props} />)`
@media (min-width: 1024px) {
display: flex;
margin: 3rem;
}
// @media (max-width: 1023px) {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// }
`;

export const StyledCard = styled((props) => <Card {...props} />)`
height: 28%;
cursor: pointer;
@media (max-width: 1023px) {
  margin: 1.5rem;
  margin-left: 8rem;
}`;

export const StyledHoveredCard0 = styled((props) => <Card {...props} />)`
height: 28%;
cursor: pointer;
border: 3px solid #3077f8;
@media (max-width: 1023px) {
  margin: 1.5rem;
  margin-left: 8rem;
}`;

export const StyledHoveredCard1 = styled((props) => <Card {...props} />)`
height: 28%;
cursor: pointer;
border: 3px solid #3077f8;
@media (max-width: 1023px) {
  margin: 1.5rem;
  margin-left: 8rem;
}`;

export const StyledHoveredCard2 = styled((props) => <Card {...props} />)`
height: 28%;
cursor: pointer;
border: 3px solid #3077f8;
@media (max-width: 1023px) {
  margin: 1.5rem;
  margin-left: 8rem;
}`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
@media (min-width: 1024px) {
width: 60%;
display: block
}
@media (max-width: 1023px) {
  width: 40%;
  margin: 3rem 0 2rem 15rem;
}`;


