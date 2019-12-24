import React from "react";
import { useSelect } from "downshift";
import { Manager, Reference, Popper, PopperProps } from "react-popper";
import { th } from "@xstyled/system";
import { Transition } from "react-transition-group";
import { DefaultTheme } from "app-theme";
import { styled, buttonSizes } from "src/shared/styled";
import { Icons } from "src/shared/icons";

const TRANSITION_DURATION_MS = 200;

const POPPER_MODIFIERS = {
  keepTogether: { enabled: false },
  arrow: { enabled: false }
};

type Props = {
  items: string[];
  placement: PopperProps["placement"];
  size?: keyof DefaultTheme["buttonSizes"];
  onSelectedItemChange: (changes: { selectedItem?: string }) => void;
};

const StyledWrap = styled.div`
  position: "relative";
`;

const StyledButton = styled.button`
  border: 1px solid transparent;
  margin: 0;
  appearance: none;
  background: none repeat scroll 0 0 transparent;
  border-spacing: 0;
  cursor: pointer;
  ${buttonSizes}
`;

const StyledList = styled.ul`
  outline: none;
  padding: 0;
  background-color: ${th.color("white")};
  border-radius: ${th.radius(3)};
  filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.2));
  will-change: opacity;
  transition: opacity ${TRANSITION_DURATION_MS}ms ease-in;
  min-width: 100px;
  cursor: pointer;
  position: relative;
`;

const StyledListItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 1ch;

  &:first-of-type {
    border-top-right-radius: ${th.radius(3)};
    border-top-left-radius: ${th.radius(3)};
  }

  &:last-of-type {
    border-bottom-right-radius: ${th.radius(3)};
    border-bottom-left-radius: ${th.radius(3)};
  }

  &[data-highlighted="true"] {
    background-color: ${th.color("gray100")};
  }
`;

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 }
} as const;

const MoreMenu: React.FC<Props> = ({
  items,
  placement,
  size,
  onSelectedItemChange
}) => {
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({ items, onSelectedItemChange });

  return (
    <Manager>
      <StyledWrap>
        <Reference>
          {({ ref }) => (
            <StyledButton size={size} {...getToggleButtonProps({ ref })}>
              <Icons.More size={4} />
            </StyledButton>
          )}
        </Reference>
        <Popper
          placement={placement}
          modifiers={POPPER_MODIFIERS}
          eventsEnabled={isOpen}
        >
          {({ ref, style }) => (
            <Transition in={isOpen} timeout={TRANSITION_DURATION_MS}>
              {state => (
                <StyledList
                  {...getMenuProps({
                    ref,
                    style: { ...transitionStyles[state], ...style }
                  })}
                >
                  {state !== "exited" &&
                    items.map((item, index) => (
                      <StyledListItem
                        key={`${item}${index}`}
                        data-highlighted={highlightedIndex === index}
                        {...getItemProps({ item, index })}
                      >
                        {item}
                      </StyledListItem>
                    ))}
                </StyledList>
              )}
            </Transition>
          )}
        </Popper>
      </StyledWrap>
    </Manager>
  );
};

export { MoreMenu };
