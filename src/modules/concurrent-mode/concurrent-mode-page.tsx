import React from "react";
import { Page, Paragraph, useScrollToTop } from "src/shared";

type Props = {
  readonly title: string;
};

const ConcurrentModePage: React.FC<Props> = ({ title }) => {
  useScrollToTop();

  return (
    <Page.Box>
      <Page.Header title={title} />
      <Paragraph>TODO</Paragraph>
    </Page.Box>
  );
};

export { ConcurrentModePage };
