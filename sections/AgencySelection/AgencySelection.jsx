import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledCTAContainer,
  StyledImageContainer,
  StyledCard,
} from "./elements";

const agencySelectionProps = {
  image: { src: "/img/video.png", alt: "", width: 1000, height: 1680 },
  title: "Managed agency selection",
  description: "Strengthen your onboarding process",
};

export const AgencySelection = ({ image, title, description, ctaText, ...props }) => {
  return (
  <StyledContainer {...props}>
      <StyledTextContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledImageContainer>
          <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
      </StyledImageContainer>
          <StyledCTAContainer>
            <StyledCard {...props}></StyledCard>
            <StyledCard {...props}>Search</StyledCard>
            <StyledCard {...props}>Pitch</StyledCard>
          </StyledCTAContainer>
  </StyledContainer>
  );
};
