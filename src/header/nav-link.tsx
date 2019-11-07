import React from "react";
import { Link } from "react-router-dom";
import { useStoreState } from "pullstate";
import styled from "styled-components/macro";
import { useDelayedLinkClickHandler } from "src/shared";
import { AnimationStore, selectAnimationDurationMs } from "src/state";

const EXTRA_DELAY_MS = 50;

const StyledLink = styled.a`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: ${props => props.theme.space[1]} 0;
`;

type Props = {
  readonly to: string;
  readonly label: string;
  readonly onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

function NavLink({ to, label, onClick }: Props): JSX.Element {
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
}

export { NavLink };
