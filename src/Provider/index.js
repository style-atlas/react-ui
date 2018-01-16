import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from 'material-ui/styles';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());


const Provider = (props)=>(
  <JssProvider
  jss={jss}
  generateClassName={generateClassName}
  {...props}
  />
)

export default Provider