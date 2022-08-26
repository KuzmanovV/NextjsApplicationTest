import Image from "next/image";
import { useState } from "react";

import {
  StyledDesktopContainer,
  StyledTextContainer,
  StyledTitle,
  StyledDescription,
  StyledCTAContainer,
  StyledImageContainer,
  StyledCard,
  StyledSubContainer,
  StyledBGContainer,
  StyledHoveredCard0,
  StyledHoveredCard1,
  StyledHoveredCard2,
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

export const AgencySelection = ({ image, imageBG, title, description, ...props }) => {
  
  const [isHovering0, setIsHovered0] = useState(false);
  const [isHovering1, setIsHovered1] = useState(false);
  const [isHovering2, setIsHovered2] = useState(false);
  const onHoverIn0 = () => setIsHovered0(true);
  const onHoverOut0 = () => setIsHovered0(false);
  const onHoverIn1 = () => setIsHovered1(true);
  const onHoverOut1 = () => setIsHovered1(false);
  const onHoverIn2 = () => setIsHovered2(true);
  const onHoverOut2 = () => setIsHovered2(false);

  return (
  <StyledDesktopContainer {...props}>
      <StyledBGContainer>
        <Image layout="fill" src={imageBG.src} alt={imageBG.alt}/>
      </StyledBGContainer>
      <StyledTextContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
        <StyledSubContainer>
          <StyledImageContainer>
          <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height}/>
          </StyledImageContainer>
          <StyledCTAContainer>
            
            {!isHovering0? (
            <StyledCard {...cardProps0} style={{ width: 610 }} onMouseEnter={onHoverIn0}></StyledCard>
            ) : (
              <StyledHoveredCard0 {...cardProps0} style={{ width: 610 }} onMouseLeave={onHoverOut0}></StyledHoveredCard0>
            )}
            
            {!isHovering1? (
            <StyledCard {...cardProps1} style={{ width: 660 }} onMouseEnter={onHoverIn1}></StyledCard>
            ) : (
              <StyledHoveredCard1 {...cardProps1} style={{ width: 660 }} onMouseLeave={onHoverOut1}></StyledHoveredCard1>
            )}

            {!isHovering2? (
            <StyledCard {...cardProps2} onMouseEnter={onHoverIn2}></StyledCard>
            ) : (
              <StyledHoveredCard1 {...cardProps2} onMouseLeave={onHoverOut2}></StyledHoveredCard1>
            )}

          </StyledCTAContainer>
        </StyledSubContainer>
  </StyledDesktopContainer>

  );
};
