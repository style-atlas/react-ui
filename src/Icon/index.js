import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import SvgIcon from 'material-ui/SvgIcon';
import {nest} from 'recompose';

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

const Icon = nest(FontAwesomeIcon)

export const RangeIcon = (props)=><Icon {...props} icon={faCalendarAlt} />
export const InspirationIcon = (props)=><Icon {...props} icon={faLightbulb} />
export const SlotIcon = (props)=><Icon {...props} icon={faFileAlt} />
export const DesignIcon = (props)=><Icon {...props} icon={faImage} />
export const StyleIcon = (props)=><Icon {...props} icon={faBriefcase} />
export const LabelIcon = (props)=><Icon {...props} icon={faFolder} />
export const CompanyIcon = (props)=><Icon {...props} icon={faBuilding} />
export const SelectedIcon = (props)=><Icon {...props} icon={faCaretRight} />
