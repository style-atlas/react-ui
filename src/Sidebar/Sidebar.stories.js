import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withInfo } from "@storybook/addon-info";

import {
  RangeIcon,
  SlotIcon
} from '../Icon'

import Sidebar, { SidebarItem, SidebarSegment } from "./";

storiesOf("Sidebar", module)
  .add("Default", withInfo('')
  (() => (
    <Sidebar>
      <SidebarSegment
      text="All Saints"
      />
      <SidebarSegment text="Winter 2019" />
      <SidebarSegment text="#8jf0m302" />
      <SidebarItem text="Details" />
      <SidebarItem text="Designs" />
      <SidebarItem text="Construction" />
      <SidebarItem text="Materials" />
      <SidebarItem text="Discussion" />
    </Sidebar>
  )))