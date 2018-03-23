import React from 'react';
import {Fragment} from 'react';
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import { StaggeredMotion, spring, presets, OpaqueConfig } from 'react-motion';

const gridItemSize = 60;

console.log(Fragment)

const gridItemStyles:StyleRulesCallback = theme=>({
  gridItem:{
    width:`${gridItemSize}px`,
    height:`${gridItemSize}px`,
    padding:theme.spacing.unit / 2
  },
  gridContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    flexWrap:'wrap'
  }
});

const columnNum = 9
const animPreset:Partial<OpaqueConfig> = presets.stiff

export const GridContainer = withStyles(gridItemStyles)
(
  ({classes,children,...rest})=>(
    <div className={classes.gridContainer} {...rest}>
     <StaggeredMotion
      defaultStyles={React.Children.map(children,()=>({o:0}))}
      styles={(prevInterpolatedStyles=[]) => prevInterpolatedStyles.map((_, i) => {
        return i === 0
          ? {o: spring(1,animPreset)}
          : (i % columnNum === 0)
          ? {o: spring(prevInterpolatedStyles[i - columnNum].o,animPreset)}
          : {o: spring(prevInterpolatedStyles[i - 1].o,animPreset)}
      })}>
      {
        interpolatingStyles =>{
          const childrenArr = React.Children.toArray(children)
          return <Fragment>
          {
            interpolatingStyles.map((style, i) =>
              <div
              key={i}
              style={{
                opacity:style.o,
                transform:`scale(${style.o})`
              }}
              children={childrenArr[i]}
              />
            )
          }
          </Fragment>
        }
      }
      </StaggeredMotion>
    </div>
  )
);

export const GridItem = withStyles(gridItemStyles)
(
  ({classes,...rest})=>(
    <div className={`${classes.gridItem}`} {...rest} />
  )
)
