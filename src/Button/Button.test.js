import React, { Fragment } from "react";
import { mount } from "enzyme";
import Button from "./index";

test("Should have a consistent API", () => {
  const doSomething = jest.fn()
  const tree = mount(<div>
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
  </div>);

  expect(tree).toMatchSnapshot();
});
