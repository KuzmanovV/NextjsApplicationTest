import Image from "next/image";
import { StyledContainer } from "../../sections/AgencySelection/elements";
import { 
  StyledInnerHeading, 
  StyledSectionParagraph,
  StyledIcon,
  StyledCardContainer,
  StyledCardTextContainer,
} from "./elements";

export const Card = ({ innerTitle, innerParagrapg, innerImage, ...props }) => {
  return (
  <StyledCardContainer {...props}>
    {/* <StyledIcon> */}
      <Image src={innerImage.src} alt={innerImage.alt} width={innerImage.width} height={innerImage.height} />
    {/* </StyledIcon> */}
    <StyledCardTextContainer>
      <StyledInnerHeading>{innerTitle}</StyledInnerHeading>
      <StyledSectionParagraph>{innerParagrapg}</StyledSectionParagraph>
    </StyledCardTextContainer>
  </StyledCardContainer>
)
};
