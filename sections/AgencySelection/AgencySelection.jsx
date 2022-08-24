import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledCTAContainer,
  StyledImageContainer,
  StyledCard,
  StyledSubContainer,
} from "./elements";

const cardProps0 = {
  innerTitle: "Brief",
  innerParagrapg: "Complete brief writing or simple guidance on what to include, we've got you covered.",
  innerImage: { src: "/img/icon0.png", alt: "iconImg", width: 100, height: 100 },
};

const cardProps1 = {
  innerTitle: "Search",
  innerParagrapg: "In-depth agency search covering; criteria matching, door knocking and due-dilligence vetting.",
  innerImage: { src: "/img/icon1.png", alt: "iconImg", width: 100, height: 100 },
  };

const cardProps2 = {
  innerTitle: "Pitch",
  innerParagrapg: "Comprehensive pitch management, including comms, diary management and pitch hosting.",
  innerImage: { src: "/img/icon2.png", alt: "iconImg", width: 100, height: 100 },
};

export const AgencySelection = ({ image, title, description, ...props }) => {
  return (
  <StyledContainer {...props}>
      <StyledTextContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
        <StyledSubContainer>
          <StyledImageContainer>
          <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
          </StyledImageContainer>
          <StyledCTAContainer>
            <StyledCard {...cardProps0}></StyledCard>
            <StyledCard {...cardProps1}></StyledCard>
            <StyledCard {...cardProps2}></StyledCard>
          </StyledCTAContainer>
        </StyledSubContainer>
  </StyledContainer>
  );
};
