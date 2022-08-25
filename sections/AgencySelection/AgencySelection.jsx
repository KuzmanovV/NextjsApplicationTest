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
  innerParagrapg0: "Complete ",
  innerParagrapg1: "brief writing or simple guidance ",
  innerParagrapg2: "on what to include, we've got you covered.",
  innerImage: { src: "/img/icon0.png", alt: "iconImg", width: 120, height: 120 },
};

const cardProps1 = {
  innerTitle: "Search",
  innerParagrapg0: "In-depth agency search covering;",
  innerParagrapg1: " criteria matching",
  innerParagrapg2: ", door knocking and due-dilligence vetting.",
  innerImage: { src: "/img/icon1.png", alt: "iconImg", width: 120, height: 120 },
  };

const cardProps2 = {
  innerTitle: "Pitch",
  innerParagrapg0: "Comprehensive ",
  innerParagrapg1: "pitch management",
  innerParagrapg2: ", including comms, diary management and pitch hosting.",
  innerImage: { src: "/img/icon2.png", alt: "iconImg", width: 120, height: 120 },
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
            <StyledCard {...cardProps0} style={{ width: 510 }}></StyledCard>
            <StyledCard {...cardProps1} style={{ width: 560 }}></StyledCard>
            <StyledCard {...cardProps2}></StyledCard>
          </StyledCTAContainer>
        </StyledSubContainer>
  </StyledContainer>
  );
};
