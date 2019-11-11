import React from "react";
import { Switcher } from "src/shared/switcher";

const Default = () => (
  <Switcher spacing={3} threshold={600}>
    <button>Hello</button>
    <button>You</button>
    <button>Absolute</button>
    <button>Hero</button>
  </Switcher>
);

// eslint-disable-next-line import/no-default-export
export default {
  component: Switcher,
  title: "Switcher"
};

export { Default };
