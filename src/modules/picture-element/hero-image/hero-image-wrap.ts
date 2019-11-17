import { styled } from "src/shared";

// An intrinsic placeholder wrapper for the hero image
// http://daverupert.com/2015/12/intrinsic-placeholders-with-picture/
const HeroImageWrap = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%; /* Square aspect ratio for portrait mode */
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.colors.gray100};

  @media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    padding-top: 60%; /* Rectangular aspect ratio for landscape mode */
  }

  /*
    IE 10 and 11 only (not Edge).
    The fallback image (e.g., for IE) has landscape aspect ratio
    so needs padding-top: 60%;, but it won't get that on
    narrow screens (<600px).
  */
  @media all and (-ms-high-contrast: none) {
    & {
      padding-top: 60%;
    }
  }
`;

export { HeroImageWrap };
