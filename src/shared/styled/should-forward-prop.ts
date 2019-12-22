import isPropValid from "@emotion/is-prop-valid";

const disallowedProps: { [key: string]: boolean } = {
  color: true,
  display: true,
  fontSize: true,
  fontWeight: true,
  spacing: true
};

const shouldForwardProp = {
  shouldForwardProp: (prop: string) =>
    isPropValid(prop) && prop !== "color" && !disallowedProps[prop]
};

export { shouldForwardProp };
