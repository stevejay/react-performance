import React from "react";
import { useTransition } from "react-spring";
import { ThemeContext } from "styled-components";
import { useBodyScrollLock } from "modules/shared";
import { SidebarNavBox } from "./sidebar-nav-box";
import { LinkList } from "./link-list";
import { LinkListItem } from "./link-list-item";

const LINKS = [
  { to: "/", label: "Home" },
  {
    to: "/transform-opacity-animations",
    label: "Transform & Opacity Animations"
  },
  { to: "/bar-chart", label: "Bar Chart" }
];

const Sidebar = ({ id, isOpen, onClose }) => {
  const duration = React.useContext(ThemeContext).timings.modalAnimation;

  const sidebarRef = React.useRef(null);
  useBodyScrollLock(sidebarRef);

  const transitions = useTransition(isOpen, null, {
    config: { duration },
    from: { opacity: 0, transform: "translateX(100px)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(100px)" }
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <SidebarNavBox
          ref={sidebarRef}
          key={key}
          id={id}
          style={props}
          onMouseDown={e => e.stopPropagation()}
          onTouchStart={e => e.stopPropagation()}
        >
          <LinkList>
            {LINKS.map(link => (
              <LinkListItem to={link.to} label={link.label} onClick={onClose} />
            ))}
          </LinkList>
        </SidebarNavBox>
      )
  );
};

export { Sidebar };
