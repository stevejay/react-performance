import React from "react";
import { useBodyScrollLock } from "modules/shared";
import { CSSTransitionSidebarNavBox } from "./css-transition-sidebar-nav-box";
import { NavLink } from "./nav-link";
import { NavLinkList } from "./nav-link-list";

const TRANSITION_STYLES = {
  entering: { opacity: 1, transform: "translateX(0)" },
  entered: { opacity: 1, transform: "translateX(0)" },
  exiting: { opacity: 0, transform: "translateX(100px)" },
  exited: { opacity: 0, transform: "translateX(100px)" }
};

const CSSTransitionSidebar = ({
  id,
  animationState,
  duration,
  pages,
  isOpen,
  onClose
}) => {
  const sidebarRef = React.useRef(null);

  useBodyScrollLock(sidebarRef);

  return (
    <CSSTransitionSidebarNavBox
      ref={sidebarRef}
      id={id}
      style={TRANSITION_STYLES[animationState]}
      duration={duration}
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
    </CSSTransitionSidebarNavBox>
  );
};

export { CSSTransitionSidebar };
