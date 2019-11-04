import React from "react";
import {
  useBodyScrollLock
  //, forceReflow, useTheme
} from "shared";
import { CSSTransitionSidebarNavBox } from "./css-transition-sidebar-nav-box";
import { NavLink } from "./nav-link";
import { NavLinkList } from "./nav-link-list";

// import { Transition, TransitionGroup } from "react-transition-group";

const TRANSITION_STYLES = {
  entering: { opacity: 1, transform: "translateX(0)" },
  entered: { opacity: 1, transform: "translateX(0)" },
  exiting: { opacity: 0, transform: "translateX(100px)" },
  exited: { opacity: 0, transform: "translateX(100px)" }
};

const CSSTransitionSidebar = ({
  id,
  animationState,
  pages,
  isOpen,
  onClose
}) => {
  const sidebarRef = React.useRef(null);

  useBodyScrollLock(sidebarRef);

  //   const duration = useTheme().timings.modalAnimation;
  //   console.log("isOpen", isOpen);

  //   return (
  //     <Transition
  //       in={isOpen}
  //       timeout={duration}
  //       //   onEnter={forceReflow}
  //       appear
  //       //   enter
  //       //   leave
  //       //   mountOnEnter
  //       //   unmountOnExit
  //     >
  //       {animationState => (
  //         <CSSTransitionSidebarNavBox
  //           ref={sidebarRef}
  //           id={id}
  //           style={TRANSITION_STYLES[animationState]}
  //         >
  //           <NavLinkList>
  //             {pages.map(page => (
  //               <li key={page.path}>
  //                 <NavLink to={page.path} label={page.title} onClick={onClose} />
  //               </li>
  //             ))}
  //           </NavLinkList>
  //         </CSSTransitionSidebarNavBox>
  //       )}
  //     </Transition>
  //   );

  return (
    <CSSTransitionSidebarNavBox
      ref={sidebarRef}
      id={id}
      style={TRANSITION_STYLES[animationState]}
    >
      <NavLinkList>
        {pages.map(page => (
          <li key={page.path}>
            <NavLink to={page.path} label={page.title} onClick={onClose} />
          </li>
        ))}
      </NavLinkList>
      <div>
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
        foo
        <br />
      </div>
    </CSSTransitionSidebarNavBox>
  );
};

export { CSSTransitionSidebar };
