import React from "react";
import { Fragment } from "react";
import injectSheet from "react-jss";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withInfo } from "@storybook/addon-info";

import * as Icons from "./index";
import { getDisplayName } from "recompose";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  item: {
    padding: "0.5em",
    backgroundColor: "#eee",
    color: "#333",
    margin: "0.5em",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    padding: "0.5rem"
  }
};

const AllIcons = injectSheet(styles)(({ classes }) => (
  <div className={classes.container}>
    {Object.values(Icons).map(Icon => (
      <div className={classes.item}>
        <Icon size="2x" className={classes.icon} />
        <code>{`<${getDisplayName(Icon)} />`}</code>
      </div>
    ))}
  </div>
));

storiesOf("Icons", module).add("Entire List", () => <AllIcons />);
