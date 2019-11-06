import React from "react";
import styled from "styled-components/macro";
import { Pages } from "src/shared";
import { NavLink } from "./nav-link";

const StyledList = styled.ul`
  margin: 0;
  padding: ${props => props.theme.space[1]} ${props => props.theme.space[2]};
  list-style: none;

  & > * + * {
    border-top: ${props => props.theme.borderWidths.hair} solid
      ${props => props.theme.colors.contrastHot500};
  }
`;

type Props = {
  readonly pages: Pages;
  readonly onClick: () => void;
};

const NavLinkList: React.FC<Props> = ({ pages, onClick }) => (
  <StyledList>
    {pages.map(page => (
      <li key={page.path}>
        <NavLink to={page.path} label={page.title} onClick={onClick} />
      </li>
    ))}
  </StyledList>
);

export { NavLinkList };
