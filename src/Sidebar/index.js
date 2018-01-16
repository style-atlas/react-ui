import React from 'react';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import {nest,compose,setDisplayName} from 'recompose';
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

export const Sidebar = compose(
  setDisplayName('Sidebar'),
  withStyles(sidebarStyle)
)(
  ({classes,...props})=><List
    classes={{
      root:classes.sidebarRoot
    }}
    {...props}
  />
)

export default Sidebar;

export const SidebarItem = compose(
  setDisplayName('SidebarItem'),
  withStyles(sidebarStyle)
)(
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
      primary:classes.sidebarText
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

export const SidebarSegment = compose(
  setDisplayName('SidebarSegment'),
  withStyles(sidebarStyle)
)(
  ({text,icon,classes,...props})=>(
  <div>
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
        primary:classes.sidebarText
      }}
      primary={text}
      />
    </ListItem>
    <Divider
    classes={{
      root:classes.divider
    }}
    />
  </div>
  )
)