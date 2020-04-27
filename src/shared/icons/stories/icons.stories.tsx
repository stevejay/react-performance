import React from "react";
import { Icons } from "src/shared/icons";
import { Cluster } from "src/shared/cluster";

const Default = () => (
  <Cluster spacing={2}>
    <Icons.ArrowRight size={5} />
    <Icons.ChevronDown size={5} />
    <Icons.Menu size={5} />
    <Icons.More size={5} />
    <Icons.Spinner size={5} />
    <Icons.Tick size={5} />
  </Cluster>
);

// eslint-disable-next-line import/no-default-export
export default {
  title: "Icons"
};

export { Default };
