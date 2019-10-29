import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

// React Router's Link component currently can't render
// a custom component so I have to use '& > a' to style
// the underlying hyperlink.
// When https://github.com/ReactTraining/react-router/pull/6462
// is released then this can be changed to be just a styled
// hyperlink and the Link can be in the Sidebar component.

const StyledNavLink = styled.li`
  & > a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: ${props => props.theme.space[1]} 0;
  }
`;

const NavLink = ({ to, label, onClick }) => (
  <StyledNavLink>
    <Link to={to} onClick={onClick}>
      {label}
    </Link>
  </StyledNavLink>
);

export { NavLink };
