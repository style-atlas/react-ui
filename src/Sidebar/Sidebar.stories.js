import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { RangeIcon, SlotIcon, LabelIcon, SelectedIcon } from "../Icon";

import Sidebar, { SidebarItem, SidebarSegment } from "./";

const handleItemClick = action("Sidebar item clicked");

storiesOf("Sidebar", module).add(
  "Default",
  () => (
    <Sidebar>
      <SidebarSegment
        icon={<LabelIcon />}
        text="All Saints"
        onClick={handleItemClick}
      />
      <SidebarSegment
        icon={<RangeIcon />}
        text="Winter 2019"
        onClick={handleItemClick}
      />
      <SidebarSegment
        icon={<SlotIcon />}
        text="#8jf0m302"
        onClick={handleItemClick}
      />
      <SidebarItem text="Details" onClick={handleItemClick} />
      <SidebarItem text="Designs" selected onClick={handleItemClick} />
      <SidebarItem text="Construction" onClick={handleItemClick} />
      <SidebarItem text="Materials" onClick={handleItemClick} />
      <SidebarItem text="Discussion" onClick={handleItemClick} />
    </Sidebar>
  )
);
