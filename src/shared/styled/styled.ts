import styled, { CreateStyled } from "@emotion/styled";
import { AppTheme } from "app-theme";

const typedStyled = styled as CreateStyled<AppTheme>;

export type AsProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: React.ComponentType<any> | keyof JSX.IntrinsicElements;
};

export { typedStyled as styled };
