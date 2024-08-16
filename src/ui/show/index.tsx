import React from "react";
import type { FCC } from "../../utils/types";

const Show: FCC<{ when?: boolean }> = (props) => {
  return <>{props.when ? <>{props.children}</> : null}</>;
};

export { Show };
