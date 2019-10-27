import React from "react";
import styled from "styled-components/macro";
import { Link } from "@reach/router";

// @reach/router's Link component currently can't render
// a custom component so I have to use '& > a' to style
// the underlying hyperlink:
const StyledListItem = styled.li`
  & > a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: ${props => props.theme.space[1]} 0;
  }
`;

const LinkListItem = ({ to, label, onClick }) => (
  <StyledListItem>
    <Link to={to} onClick={onClick}>
      {label}
    </Link>
  </StyledListItem>
);

export { LinkListItem };
