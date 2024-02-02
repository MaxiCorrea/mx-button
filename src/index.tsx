import * as React from 'react'
import { Button as MuiButton } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useMxButtonStyles = makeStyles<Theme>(() =>
  createStyles({
    rootDefault: {
      fontFamily: 'Gotham',
      borderRadius: '4px',
      textTransform: 'none'
    },
    rootRounded: {
      fontFamily: 'Gotham',
      borderRadius: '30px',
      textTransform: 'none'
    },
    rootSquare: {
      fontFamily: 'Gotham',
      borderRadius: '0px',
      textTransform: 'none'
    },
    label: {
      fontStyle: 'normal',
      fontWeight: 400,
      letterSpacing: '-0.05em'
    },
    contained: {
      boxShadow: 'none'
    },
    containedPrimary: {
      color: '#ffffff',
      background: '#925FF0',
      '&:hover': {
        background: '#A87FF3'
      }
    },
    containedSecondary: {
      color: '#784DC7',
      background: '#E9DFFC',
      '&:hover': {
        background: '#DECFFB'
      }
    },
    outlinedPrimary: {
      background: '#E9DFFC',
      border: '1px solid #784DC7',
      '&:hover': {
        background: '#DECFFB'
      }
    },
    sizeSmall: {
      fontSize: '12px',
      padding: '8px 16px',
      height: '30px'
    },
    sizeLarge: {
      fontSize: '20px',
      padding: '16px 32px',
      height: '52px'
    }
  })
)

type Size = 'small' | 'medium' | 'large'

type Variant =
  | 'primary'
  | 'secondary'
  | 'outlined'
  | 'text'
  | 'rounded'
  | 'square'

interface MxButtonProps {
  /**
   * Label of Button
   */
  readonly label?: string
  /**
   * Types of variants available
   */
  readonly variant: Variant
  /**
   * Types of sizes available
   */
  readonly size: Size
}

/**
 * MxButton Component
 * @param props
 * @returns
 */
export const MxButton: React.VFC<MxButtonProps> = (props) => {
  const classes = useMxButtonStyles()

  if (props.variant === 'primary') {
    return (
      <MuiButton
        variant='contained'
        color='primary'
        size={props.size}
        classes={{
          root: classes.rootDefault,
          sizeLarge: props.size === 'large' ? classes.sizeLarge : undefined,
          sizeSmall: props.size === 'small' ? classes.sizeSmall : undefined,
          contained: classes.contained,
          containedPrimary: classes.containedPrimary,
          label: classes.label
        }}
      >
        {props.label ? `${props.label}` : ''}
      </MuiButton>
    )
  }

  if (props.variant === 'secondary') {
    return (
      <MuiButton
        variant='contained'
        color='secondary'
        size={props.size}
        classes={{
          root: classes.rootDefault,
          sizeLarge: props.size === 'large' ? classes.sizeLarge : undefined,
          sizeSmall: props.size === 'small' ? classes.sizeSmall : undefined,
          contained: classes.contained,
          containedSecondary: classes.containedSecondary,
          label: classes.label
        }}
      >
        {props.label ? `${props.label}` : ''}
      </MuiButton>
    )
  }

  if (props.variant === 'outlined') {
    return (
      <MuiButton
        variant='outlined'
        color='primary'
        size={props.size}
        classes={{
          root: classes.rootDefault,
          sizeLarge: props.size === 'large' ? classes.sizeLarge : undefined,
          sizeSmall: props.size === 'small' ? classes.sizeSmall : undefined,
          outlinedPrimary: classes.outlinedPrimary,
          label: classes.label
        }}
      >
        {props.label ? `${props.label}` : ''}
      </MuiButton>
    )
  }

  if (props.variant === 'text') {
    return (
      <MuiButton
        variant='text'
        color='primary'
        size={props.size}
        classes={{
          root: classes.rootDefault,
          sizeLarge: props.size === 'large' ? classes.sizeLarge : undefined,
          sizeSmall: props.size === 'small' ? classes.sizeSmall : undefined,
          label: classes.label
        }}
      >
        {props.label ? `${props.label}` : ''}
      </MuiButton>
    )
  }

  return (
    <MuiButton
      size={props.size === 'small' ? 'small' : undefined}
      classes={{
        root:
          props.variant === 'rounded'
            ? classes.rootRounded
            : props.variant === 'square'
            ? classes.rootSquare
            : classes.rootDefault,

        sizeLarge: props.size === 'large' ? classes.sizeLarge : undefined,
        sizeSmall: props.size === 'small' ? classes.sizeSmall : undefined
      }}
    >
      {props.label ? `${props.label}` : ''}
    </MuiButton>
  )
}
