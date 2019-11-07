export type Page = {
  readonly path: string;
  readonly title: string;
  readonly component: import("react").FunctionComponent<{
    readonly title: string;
  }>;
};

export type Pages = ReadonlyArray<Page>;
