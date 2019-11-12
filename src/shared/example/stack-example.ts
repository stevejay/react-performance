import styled from "styled-components/macro";
import {
  MarginTopProps,
  style,
  getSpace,
  TLengthStyledSystem
} from "@xstyled/system";

const verticalSpacing = style({
  prop: "verticalSpacing",
  cssProperty: "marginTop",
  themeGet: getSpace
});

type StackExampleProps = { verticalSpacing: MarginTopProps["marginTop"] };

const StackExample = styled.div<StackExampleProps>`
  & > * + * {
    ${verticalSpacing}
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

type Props = {
  spacing: import("csstype").MarginTopProperty<TLengthStyledSystem>;
};

const CustomExample = styled.div<Props>`
  background-color: red;
  margin: calc(${props => getSpace(props.spacing)} / 2);
`;

// &:hover:not(:disabled):not([data-loading="true"]),
// &:active:not(:disabled):not([data-loading="true"]) {
//   background-color: ${darken(0.1, theme.buttons[variant].backgroundColor)};
//   border-color: ${darken(0.1, theme.buttons[variant].borderColor)};
// }

export { StackExample, CustomExample };
