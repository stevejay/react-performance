import styled, { CreateStyled } from "@emotion/styled";
import { theme } from "./theme";

const typedStyled = styled as CreateStyled<typeof theme>;

export type AsProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: React.ComponentType<any> | keyof JSX.IntrinsicElements;
};

export { typedStyled as styled };
export { useTheme } from "./use-theme";
