import { StyledInnerHeading, StyledSectionParagraph } from "./elements";

export const Card = ({ ...props }) => {
  return (
    <>
    {/* <StyledCard {...props} /> */}
    <StyledInnerHeading{...props} />
    <StyledSectionParagraph{...props} />
</>
)
};
