import React from "react";
import styled from "styled-components/macro";
import { css } from "styled-components";
import { NavLink } from "./nav-link";

const StyledList = styled.ul(
  ({ theme }) => css`
    margin: 0;
    padding: ${theme.space[1]} ${theme.space[2]};
    list-style: none;

    & > * + * {
      border-top: ${theme.borderWidths.hair} solid
        ${theme.colors.contrastHot500};
    }
  `
);

type Props = {
  readonly pages: readonly {
    readonly path: string;
    readonly title: string;
  }[];
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
