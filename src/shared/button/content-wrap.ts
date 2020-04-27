import { styled } from "src/shared/styled";

type Props = {
  isLoading: boolean;
};

const ContentWrap = styled.span<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: ${props => (props.isLoading ? 0 : 1)};
`;

export { ContentWrap };
