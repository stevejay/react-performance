import React from "react";
import { Icons } from "src/shared/icons";

const Default = () => (
  <>
    <Icons.ArrowRight size={5} />
    <Icons.Menu size={5} />
    <Icons.Spinner size={5} />
    <Icons.Tick size={5} />
  </>
);

// eslint-disable-next-line import/no-default-export
export default {
  title: "Icons"
};

export { Default };
