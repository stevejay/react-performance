import React from "react";
import { useTheme } from "shared";
import { HeroImageWrap } from "./hero-image-wrap";
import { InnerImage } from "./inner-image";
import {
  WEBP_MIME_TYPE,
  WEBP_EXTENSION,
  JPEG_MIME_TYPE,
  JPEG_EXTENSION
} from "./constants";

// Object fit could be an option in the future (no support in IE).
// https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit

const HeroImage = ({
  landscapeImagePath,
  portraitImagePath,
  altText,
  children
}) => {
  const createLandscapeSrcSet = (imagePath, extension) =>
    `${imagePath}@half${extension} 1000w, ${imagePath}${extension} 2000w`;

  const createPortraitSrcSet = (imagePath, extension) =>
    `${imagePath}@half${extension} 600w, ${imagePath}${extension} 1200w`;

  const landscapeMediaQuery = `(min-width: ${
    useTheme().breakpoints.tabletPortrait
  })`;

  return (
    <HeroImageWrap>
      <picture>
        <source
          media={landscapeMediaQuery}
          type={WEBP_MIME_TYPE}
          srcSet={createLandscapeSrcSet(landscapeImagePath, WEBP_EXTENSION)}
          sizes="100vw"
        />
        <source
          media={landscapeMediaQuery}
          type={JPEG_MIME_TYPE}
          srcSet={createLandscapeSrcSet(landscapeImagePath, JPEG_EXTENSION)}
          sizes="100vw"
        />
        <source
          type={WEBP_MIME_TYPE}
          srcSet={createPortraitSrcSet(portraitImagePath, WEBP_EXTENSION)}
          sizes="100vw"
        />
        <source
          type={JPEG_MIME_TYPE}
          srcSet={createPortraitSrcSet(portraitImagePath, JPEG_EXTENSION)}
          sizes="100vw"
        />
        <InnerImage
          src={`${landscapeImagePath}${JPEG_EXTENSION}`}
          alt={altText}
        />
      </picture>
      {children}
    </HeroImageWrap>
  );
};

export { HeroImage };
