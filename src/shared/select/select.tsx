import React from "react";
import { useSelect } from "downshift";
import { Manager, Reference, Popper } from "react-popper";
import { Transition } from "react-transition-group";
import { th } from "@xstyled/system";
import { DefaultTheme } from "app-theme";
import { Button } from "src/shared/button";
import { styled } from "src/shared/styled";
import { Icons } from "src/shared/icons";

type Props = {
  items: string[];
  selectedItem: string;
  //   placement: PopperProps["placement"];
  size?: keyof DefaultTheme["buttonSizes"];
  onSelectedItemChange: (changes: { selectedItem?: string }) => void;
};

const TRANSITION_DURATION_MS = 200;

const POPPER_MODIFIERS = {
  keepTogether: { enabled: true },
  arrow: { enabled: false },
  offset: { offset: 0 }
};

const TRANSITION_STYLES = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 }
} as const;

const StyledWrap = styled.div`
  position: "relative";
`;

const StyledList = styled.ul`
  outline: none;
  padding: 0;
  margin: 0;
  z-index: 1;
  background-color: ${th.color("white")};
  border-bottom-left-radius: ${th.radius(3)};
  border-bottom-right-radius: ${th.radius(3)};
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

const Select: React.FC<Props> = ({
  items,
  selectedItem,
  //   placement,
  size,
  onSelectedItemChange
}) => {
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect<string>({ items, selectedItem, onSelectedItemChange });

  return (
    <Manager>
      <StyledWrap>
        <Reference>
          {({ ref }) => (
            <Button
              useCSSAnimation
              variant="outline"
              size={size}
              width={250}
              {...getToggleButtonProps({ ref })}
            >
              <span>{selectedItem}</span>
              <Icons.ChevronDown color="gray500" size={3} ml="0.5em" />
            </Button>
          )}
        </Reference>
        <Popper
          placement="bottom"
          modifiers={POPPER_MODIFIERS}
          eventsEnabled={isOpen}
        >
          {({ ref, style }) => (
            <Transition in={isOpen} timeout={TRANSITION_DURATION_MS}>
              {state => (
                <StyledList
                  {...getMenuProps({
                    ref,
                    style: { ...TRANSITION_STYLES[state], ...style }
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

export { Select };
