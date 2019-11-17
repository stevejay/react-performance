import styled, { CreateStyled } from "@emotion/styled";
import { theme } from "./theme";

const foo = styled as CreateStyled<typeof theme>;

// eslint-disable-next-line import/no-default-export
// export default styled as CreateStyled<typeof theme>;

export { foo as styled };
