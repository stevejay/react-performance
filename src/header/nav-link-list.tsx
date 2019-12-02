import React from "react";
import { getBorderWidth, getColor, getSpace } from "@xstyled/system";
import { styled } from "src/shared";
import { NavLink } from "./nav-link";

const StyledList = styled.ul`
  margin: 0;
  padding: ${getSpace(1)} ${getSpace(2)};
  list-style: none;

  & > li + li {
    border-top: ${getBorderWidth("hair")} solid ${getColor("contrastHot500")};
  }
`;

type Props = {
  readonly pages: ReadonlyArray<{
    readonly path: string;
    readonly title: string;
  }>;
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
