import React from "react";
import { Link } from "react-router-dom";
import { th } from "@xstyled/system";
import { useStoreState } from "pullstate";
import { useDelayedLinkClickHandler, styled } from "src/shared";
import { AnimationStore, selectAnimationDurationMs } from "src/state";

const EXTRA_DELAY_MS = 50;

const StyledLink = styled.a`
  color: ${th.color("white")};
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: ${th.space(1)} 0;
`;

type Props = {
  to: string;
  label: string;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const NavLink = ({ to, label, onClick }: Props) => {
  const { duration, shouldDelayNavigation } = useStoreState(
    AnimationStore,
    s => ({
      duration: selectAnimationDurationMs(s),
      shouldDelayNavigation: s.shouldDelayNavigation
    })
  );

  const adjustedDuration = shouldDelayNavigation
    ? duration + EXTRA_DELAY_MS
    : 0;

  const handleClick = useDelayedLinkClickHandler(to, adjustedDuration, onClick);

  return (
    <Link to={to} component={StyledLink} onClick={handleClick}>
      {label}
    </Link>
  );
};

export { NavLink };
