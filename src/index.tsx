import * as React from 'react'
import { Button as MuiButton, } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useMxButtonStyles = makeStyles<Theme>(() =>
  createStyles({
    root: {
      fontFamily: 'Gotham'
    },
  })
)

type Variant =
  | 'primary'
  | 'secundary'
  | 'outlined'
  | 'text'
  | 'rounded'
  | 'square'

interface MxButtonProps {
  readonly label?: string
  readonly variant: Variant;
}

/**
 *
 * @param props
 * @returns
 */
export const MxButton: React.VFC<MxButtonProps> = (props) => {
  const classes = useMxButtonStyles()
  
  const classesPrimary = {
    root : classes.root,
  };
  const classesSecundary = {
    root : classes.root,
  };
  const classesOutlined = {
    root : classes.root,
  };
  const classesText = {
    root : classes.root,
  };
  const classesRounded ={
    root : classes.root,
  }
  const classesSquare ={
    root : classes.root,
  }
  
  const selectVariant = (variant : Variant) => {
    if(variant === "primary") return classesPrimary;
    if(variant === "secundary") return classesSecundary;
    if(variant === "outlined") return classesOutlined;
    if(variant === "text") return classesText;
    if(variant === "rounded") return classesRounded;
    if(variant === "square") return classesSquare;    
    return undefined;
  }

  return (
    <MuiButton
      classes={selectVariant(props.variant)}
    >
      {props.label ? `${props.label}` : ''}
    </MuiButton>
  )
}
