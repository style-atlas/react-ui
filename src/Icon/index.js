import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import GraphIcon from './Graph';
import GridIcon from './Grid';
import LibraryIcon from './Library';

import {
  faCalendarAlt,
  faLightbulb,
  faFileAlt,
  faImage,
  faBriefcase,
  faBuilding,
  faFolder,
  faCaretRight
} from '@fortawesome/fontawesome-free-solid'

export const InspirationIcon = (props)=><FontAwesomeIcon {...props} icon={faLightbulb} />
export const SlotIcon = (props)=><FontAwesomeIcon {...props} icon={faFileAlt} />
export const DesignIcon = (props)=><FontAwesomeIcon {...props} icon={faImage} />
export const StyleIcon = (props)=><FontAwesomeIcon {...props} icon={faBriefcase} />
export const LabelIcon = (props)=><FontAwesomeIcon {...props} icon={faFolder} />
export const CompanyIcon = (props)=><FontAwesomeIcon {...props} icon={faBuilding} />
export const SelectedIcon = (props)=><FontAwesomeIcon {...props} icon={faCaretRight} />

export { 
  GraphIcon,
  GraphIcon as DashboardIcon,

  GridIcon,
  GridIcon as RangeIcon,
  
  LibraryIcon
}