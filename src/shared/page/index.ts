import { PageBox } from "./page-box";
import { PageHeader } from "./page-header";

const Page = {
  Box: PageBox,
  Header: PageHeader
} as const;

export { Page };
