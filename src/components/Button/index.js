import React from 'react';

export function Button(props){
  const {
    children,
    ...remainingProps
  } = props;

  return <button {...remainingProps}>
    {children}
  </button>
}