import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withInfo } from "@storybook/addon-info";
import * as colors from "./colors";

storiesOf("Colors", module).add("all", () => <Colors />);

function Colors() {
  return (
    <div>
      {Object.entries(colors).map(([key, val]) => (
        <ColorBrick name={key} color={val} />
      ))}
    </div>
  );
}

function ColorBrick(props) {
  console.log("ColorBrick", props);
  return (
    <div
      style={{
        backgroundColor: props.color,
        display: "block",
        padding: "10px"
      }}
    >
      {props.name}
    </div>
  );
}
