import React from "react";
import { Link } from "react-router-dom";
import { useStoreState } from "pullstate";
import styled from "styled-components/macro";
import { useDelayedLinkClickHandler } from "src/shared";
import { AnimationStore } from "src/state";

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
  const duration = useStoreState(AnimationStore, s => s.animationDurationMs);
  const shouldDelayNavigation = useStoreState(
    AnimationStore,
    s => s.shouldDelayNavigation
  );

  const delay = shouldDelayNavigation ? duration + EXTRA_DELAY_MS : 0;
  const handleClick = useDelayedLinkClickHandler(to, delay, onClick);

  return (
    <Link to={to} component={StyledLink} onClick={handleClick}>
      {label}
    </Link>
  );
}

export { NavLink };
