import styled, { CreateStyled } from "@emotion/styled";
import { DefaultTheme } from "app-theme";

const typedStyled = styled as CreateStyled<DefaultTheme>;

export type AsProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: React.ComponentType<any> | keyof JSX.IntrinsicElements;
};

export { typedStyled as styled };
