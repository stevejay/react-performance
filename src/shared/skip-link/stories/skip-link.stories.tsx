import React from "react";
import {
  SkipLink,
  SkipLinkProvider,
  useSkipLinkTarget
} from "src/shared/skip-link";

const Default = () => (
  <SkipLinkProvider>
    <Inner />
  </SkipLinkProvider>
);

const Inner = () => {
  const targetId = "target-id";
  const targetRef = React.useRef<HTMLElement>(null);
  useSkipLinkTarget(targetId, targetRef);

  return (
    <>
      <SkipLink targetId={targetId}>The skip link</SkipLink>
      <section ref={targetRef}>The skip link target</section>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: "SkipLink"
};

export { Default };
