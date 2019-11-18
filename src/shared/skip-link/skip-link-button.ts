import { th } from "@xstyled/system";
import { styled } from "src/shared/styled";

const SkipLinkButton = styled.button`
  position: absolute;
  left: 1em;
  top: 1em;
  appearance: none;
  background: ${th.color("white")};
  border-spacing: 0;
  border-radius: ${th.radius("xs")};
  color: ${th.color("link")};
  font-weight: ${th.fontWeight("normal")};
  text-decoration: underline;
  padding: ${th.space(1)};
`;

export { SkipLinkButton };
