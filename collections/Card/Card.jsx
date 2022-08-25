import Image from "next/image";
import { StyledContainer } from "../../sections/AgencySelection/elements";
import { 
  StyledInnerHeading, 
  StyledSectionParagraph,
  StyledIcon,
  StyledCardContainer,
  StyledCardTextContainer,
  StyledImageContainer,
  StyledSectionBold,
  StyledSectionSpan,
} from "./elements";

export const Card = ({ innerTitle, innerParagrapg0, innerParagrapg1, innerParagrapg2, innerImage, ...props }) => {
  return (
  <StyledCardContainer {...props}>
    {/* <StyledIcon> */}
    <StyledImageContainer>
      <Image src={innerImage.src} alt={innerImage.alt} width={innerImage.width} height={innerImage.height} />
    </StyledImageContainer>
    {/* </StyledIcon> */}
    <StyledCardTextContainer>
      <StyledInnerHeading>{innerTitle}</StyledInnerHeading>
      <StyledSectionParagraph>
          <StyledSectionSpan>{innerParagrapg0}</StyledSectionSpan>
          <StyledSectionBold>{innerParagrapg1}</StyledSectionBold>
          <StyledSectionSpan>{innerParagrapg2}</StyledSectionSpan>
      </StyledSectionParagraph>
    </StyledCardTextContainer>
  </StyledCardContainer>
)
};
