import React from "react";
import { useTransition } from "react-spring";
import { useBodyScrollLock, useTheme } from "modules/shared";
import { SidebarNavBox } from "./sidebar-nav-box";
import { NavLink } from "./nav-link";
import { NavLinkList } from "./nav-link-list";

const LINKS = [
  { to: "/", label: "Picture Element" },
  {
    to: "/transform-opacity-animations",
    label: "Transform & Opacity Animations"
  },
  { to: "/bar-chart", label: "Bar Chart" }
];

const Sidebar = ({ id, isOpen, onClose }) => {
  const sidebarRef = React.useRef(null);
  useBodyScrollLock(sidebarRef);

  const duration = useTheme().timings.modalAnimation;

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
          <NavLinkList>
            {LINKS.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                label={link.label}
                onClick={onClose}
              />
            ))}
          </NavLinkList>
        </SidebarNavBox>
      )
  );
};

export { Sidebar };
