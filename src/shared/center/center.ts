import { maxWidth, MaxWidthProps, px, PaddingXProps } from "@xstyled/system";
import { styled } from "src/shared/styled";

type Props = MaxWidthProps &
  PaddingXProps & {
    readonly intrinsic?: boolean;
    // Adds `text-align: center` rule if true:
    readonly centeredText?: boolean;
  };

const Center = styled.div<Props>`
  box-sizing: content-box;
  display: block;
  margin-left: auto;
  margin-right: auto;
  ${maxWidth}
  ${px}

  ${props =>
    props.intrinsic
      ? `
    display: flex;
    align-items: center;
    flex-direction: column;`
      : ""}

  ${props => (props.centeredText ? `text-align: center;` : "")}
`;

export { Center };
