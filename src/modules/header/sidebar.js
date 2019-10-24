import React from "react";
import { animated } from "react-spring";
import styled from "styled-components/macro";

const SidebarBox = styled(animated.nav)`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 80vw;
  max-width: 300px;
  background-color: red;
`;

const Sidebar = ({ id, style }) => (
  <SidebarBox
    id={id}
    style={style}
    onMouseDown={e => e.stopPropagation()}
    onTouchStart={e => e.stopPropagation()}
  >
    <ul>
      <li>
        <a href="/transform-opacity-animations">Transform/Opacity Animations</a>
      </li>
      <li>
        <a href="/bar-chart">Bar Chart</a>
      </li>
    </ul>
  </SidebarBox>
);

export { Sidebar };
