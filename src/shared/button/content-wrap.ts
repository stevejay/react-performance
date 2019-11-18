import { styled } from "src/shared/styled";

type Props = {
  readonly isLoading: boolean;
};

const ContentWrap = styled.span<Props>(({ isLoading }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: isLoading ? 0 : 1
}));

export { ContentWrap };
