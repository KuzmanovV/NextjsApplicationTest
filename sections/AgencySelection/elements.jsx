import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";
import { Card } from "~/collections";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
`;


export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
margin: 0;
color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
margin: 1.563rem 0 0;
`;

export const StyledCard = styled((props) => <Card {...props} />)`
margin: 1.563rem 0 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
color: black;
width: 30%;
margin-left: 11.125rem;
font-family: sans-serif;
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
`;

// export const StyledGetStartedBtn = styled((props) => <Button {...props} variant="outlined" color="main" />)`
//   margin-top: 4.375rem;
//   padding-top: 0;
//   padding-bottom: 0;
// `;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
max-width: 22.03rem;
max-height: 65rem;
width: 100%;
height: 100%;
// margin-left: auto;
`;
