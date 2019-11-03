import React from "react";
import { useTransition } from "react-spring";
import { useBodyScrollLock, useTheme } from "modules/shared";
import { SidebarNavBox } from "./sidebar-nav-box";
import { NavLink } from "./nav-link";
import { NavLinkList } from "./nav-link-list";

const Sidebar = ({ id, pages, isOpen, onClose }) => {
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
            {pages.map(page => (
              <li key={page.path}>
                <NavLink to={page.path} label={page.title} onClick={onClose} />
              </li>
            ))}
          </NavLinkList>
        </SidebarNavBox>
      )
  );
};

export { Sidebar };
