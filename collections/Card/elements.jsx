// Styled elements for the Card go here
import styled from "styled-components";
import { SectionInnerHeading, SectionParagraph } from "~/components";

// export const StyledCard = styled(({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />)`
//   display: flex;
//   max-width: 1920px;
//   width: 100%;
//   height: auto;
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: ${({ topMargin }) => topMargin}rem;
//   margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
// `;

export const StyledInnerHeading = styled((props) => <SectionInnerHeading {...props} />)`
margin: 1.563rem 0 0;
`;

export const StyledSectionParagraph = styled((props) => <SectionParagraph {...props} />)`
margin: 1.563rem 0 0;
`;