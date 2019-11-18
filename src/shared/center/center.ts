import { maxWidth, px, MaxWidthProps, PaddingXProps } from "@xstyled/system";
import { styled } from "src/shared/styled";

type Props = MaxWidthProps &
  PaddingXProps & {
    readonly intrinsic?: boolean;
    // Adds `text-align: center` rule if true:
    readonly centeredText?: boolean;
  };

const Center = styled.div<Props>(
  {
    boxSizing: "content-box",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },
  maxWidth,
  px,
  ({ intrinsic }) =>
    intrinsic && {
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    },
  ({ centeredText }) => centeredText && { textAlign: "center" }
);

export { Center };
