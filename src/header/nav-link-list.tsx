import React from "react";
import { th } from "@xstyled/system";
import { styled } from "src/shared";
import { NavLink } from "./nav-link";

const StyledList = styled.ul`
  margin: 0;
  padding: ${th.space(1)} ${th.space(2)};
  list-style: none;

  & > li + li {
    border-top: ${th.borderWidth("hair")} solid ${th.color("contrastHot500")};
  }
`;

type Props = {
  pages: ReadonlyArray<{
    path: string;
    title: string;
  }>;
  onClick: () => void;
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
