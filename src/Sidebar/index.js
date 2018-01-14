import React, { Fragment } from 'react';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import {nest} from 'recompose';
import { N900, N10 } from '../Theme/colors'
import {SelectedIcon} from '../Icon';

const sidebarStyle = theme=>({
  sidebarText:{
    color:N10
  },
  sidebarRoot:{
    backgroundColor:N900,
    minWidth:'200px'
  },
  divider:{
    backgroundColor:'rgba(255,255,255,0.3)'
  },
  sidebarIcon:{
    color:N10    
  }
})

export const Sidebar = withStyles(sidebarStyle)
(
  ({children,classes,...props})=><Drawer
    type="permanent"
    anchor='left'
    classes={{
      paper:classes.sidebarRoot
    }}
    children={<List children={children} />}
    {...props}
  />
)

export default Sidebar;

export const SidebarItem = withStyles(sidebarStyle)
(
  ({text,classes,selected,icon,...props})=>(
  <ListItem button {...props}>
    {
      icon && 
      <ListItemIcon
      classes={{root:classes.sidebarIcon}}
      children={icon}
      />
    }
    
    <ListItemText
    classes={{
      text:classes.sidebarText
    }}
    primary={text}
    />
    {
      selected && 
      <SelectedIcon className={classes.sidebarIcon}/>
    }
  </ListItem>
  )
)

export const SidebarSegment = withStyles(sidebarStyle)
(
  ({text,icon,classes,...props})=>(
  <Fragment>
    <ListItem button {...props}>
      {
        icon && 
        <ListItemIcon
        classes={{root:classes.sidebarIcon}}
        children={icon}
        />
      }
      <ListItemText
      classes={{
        text:classes.sidebarText
      }}
      primary={text}
      />
    </ListItem>
    <Divider
    classes={{
      root:classes.divider
    }}
    />
  </Fragment>
  )
)