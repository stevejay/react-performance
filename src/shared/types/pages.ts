import React from "react";

type Props = {
  readonly title: string;
};

export type Page = {
  path: string;
  title: string;
  component: React.FunctionComponent<Props>;
};

export type Pages = ReadonlyArray<Page>;
