import React from "react";

import { storiesOf } from "@storybook/react";

import { GridItem, GridContainer } from "./";
import {Paper} from "material-ui";

storiesOf("Grid", module).add("Beautiful", () => (
  <GridContainer>
    {(Array.apply(null, Array(100))).map((_,i)=>
      <GridItem key={i}> <RedCircle /> </GridItem>
    )}
  </GridContainer>
));

function RedCircle(){
  return <Paper style={{
    background:'green',
    height:'100%',
    width:'100%',
    display:'block',
    // borderRadius:'50%'
  }} />
}
