import React, { Fragment } from 'react';

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "./index";
import UIProvider from "../Provider";

const doSomething = action('Button Clicked')

storiesOf("Button", module)
  .add("Flat Buttons", () => (
    <UIProvider>
      <Fragment>
        <Button>Default</Button>
        <Button color="primary">
          Primary
        </Button>
        <Button color="accent">
          Accent
        </Button>
        <Button color="contrast">
          Contrast
        </Button>
        <Button disabled>
          Disabled
        </Button>
        <Button href="#flat-buttons">
          Link
        </Button>
        <Button disabled href="/">
          Link disabled
        </Button>
        <Button dense>
          Dense
        </Button>
        <Button onClick={doSomething} data-something="here I am">
          Does something
        </Button>
      </Fragment>
    </UIProvider>
  ))