// Styled elements for the Card go here
import styled from "styled-components";
import { SectionInnerHeading, SectionParagraph, Icon } from "~/components";

export const StyledInnerHeading = styled((props) => <SectionInnerHeading {...props} />)`
margin: 1.563rem 0 0;
font-weight: bold;  
`;

export const StyledSectionParagraph = styled((props) => <SectionParagraph {...props} />)`
margin: 1.563rem 0 0;
`;

export const StyledIcon = styled((props) => <Icon {...props} />)`
width: 100%;
height: 100%;
`;

export const StyledCardContainer = styled((props) => <div {...props} />)`
background-color: #f9f9f9;
display: flex;
`;

export const StyledCardTextContainer = styled((props) => <div {...props} />)`

`;