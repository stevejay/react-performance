import React from "react";
import { animated, useTransition } from "react-spring";
import styled from "styled-components/macro";
import { useBodyScrollLock } from "modules/shared";

const SidebarNavBox = styled(animated.nav)`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 80vw;
  max-width: 300px;
  background-color: red;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

const Sidebar = ({ id, isOpen, duration }) => {
  const transitions = useTransition(isOpen, null, {
    config: { duration },
    from: { opacity: 0, transform: "translateX(100px)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(100px)" }
  });

  const sidebarRef = React.useRef(null);
  useBodyScrollLock(sidebarRef);

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <SidebarNavBox
          key={key}
          id={id}
          style={props}
          ref={sidebarRef}
          onMouseDown={e => e.stopPropagation()}
          onTouchStart={e => e.stopPropagation()}
        >
          <ul>
            <li>
              <a href="/transform-opacity-animations">
                Transform/Opacity Animations
              </a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
            <li>
              <a href="/bar-chart">Bar Chart</a>
            </li>
          </ul>
        </SidebarNavBox>
      )
  );
};

export { Sidebar };
