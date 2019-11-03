import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { useDelayedLinkClickHandler } from "modules/shared";

const StyledLink = styled.a`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: ${props => props.theme.space[1]} 0;
`;

const NavLink = ({ to, label, onClick }) => {
  const handleClick = useDelayedLinkClickHandler(to, 300, onClick);

  return (
    <Link to={to} component={StyledLink} onClick={handleClick}>
      {label}
    </Link>
  );
};

export { NavLink };
