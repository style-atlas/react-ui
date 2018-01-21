import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withInfo } from "@storybook/addon-info";
import * as colors from "./colors";

storiesOf("Colors", module).add("all", () => <Colors />);

function Colors() {
  return Object.entries(colors).map(([key, val]) => (
    <ColorGroup name={key} group={val} key={key} />
  ));
}

function ColorBrick(props) {
  return (
    <div
      style={{
        backgroundColor: props.color,
        display: "block",
        padding: "10px"
      }}
    >
      {props.name} <small> - {props.color}</small>
    </div>
  );
}

function ColorGroup({ group, name }) {
  return (
    <div style={{ width: "150px", float: "left", margin: "6px" }}>
      <h3>{name}</h3>
      {Object.entries(group).map(([key, val]) => (
        <ColorBrick name={key} color={val} key={key} />
      ))}
    </div>
  );
}
