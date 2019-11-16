import React from "react";
import { Heading } from "src/shared/heading";
import { useSkipLinkTarget } from "src/shared/skip-link";

type Props = {
  readonly title: string;
};

const PageHeader: React.FC<Props> = ({ title }) => {
  const headingRef = React.useRef<HTMLHeadingElement>(null);
  useSkipLinkTarget("main-content", headingRef);

  return (
    <Heading
      ref={headingRef}
      pb={{ xs: 1, sm: 2 }}
      fontSize={{ xs: 4, sm: 5 }}
      fontWeight="light"
      borderBottom="1px solid"
      borderColor="contrastCool500"
    >
      {title}
    </Heading>
  );
};

export { PageHeader };
