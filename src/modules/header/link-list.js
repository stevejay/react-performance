import styled from "styled-components/macro";

const LinkList = styled.ul`
  margin: 0;
  padding: ${props => props.theme.space[1]} ${props => props.theme.space[2]};
  list-style: none;

  & > * + * {
    border-top: ${props => props.theme.borderWidths.hair} solid
      ${props => props.theme.colors.secondary500};
  }
`;

export { LinkList };
