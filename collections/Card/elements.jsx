// Styled elements for the Card go here
import styled from "styled-components";
import { SectionInnerHeading, SectionParagraph, Icon, SectionBold } from "~/components";

export const StyledCardContainer = styled((props) => <div {...props} />)`
background-color: #f9f9f9;
display: flex;
align-items: center;
border-radius: 8px;
margin: 0 0 0 3rem;
`;

export const StyledSectionParagraph = styled((props) => <SectionParagraph {...props} />)`
margin:  0 2.5rem 0 0;
padding-right: 10px;
font-size: 20px;
`;

// export const StyledIcon = styled((props) => <Icon {...props} />)`
// width: 100%;
// height: 100%;
// `;

export const StyledInnerHeading = styled((props) => <SectionInnerHeading {...props} />)`
margin: 0;
font-size: 25px;
font-weight: bold;  
line-height: 2rem;
`;

export const StyledCardTextContainer = styled((props) => <div {...props} />)`
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
margin: 2.5rem;
`;

export const StyledSectionBold = styled(({ ...props }) => <b {...props} />)`
// margin: 1rem;
`;

export const StyledSectionSpan = styled(({ ...props }) => <span {...props} />)`
// margin: 1rem;
`;