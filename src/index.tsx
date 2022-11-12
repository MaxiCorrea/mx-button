import * as React from 'react'
import { Button as MuiButton } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useMxButtonStyles = makeStyles<Theme>(() =>
  createStyles({
    rootDefault: {
      fontFamily: 'Gotham',
      borderRadius: '4px'
    },
    rootRounded: {
      fontFamily: 'Gotham',
      borderRadius: '30px'
    },
    rootSquare: {
      fontFamily: 'Gotham',
      borderRadius: '0px'
    },
  })
)

type Size = 'small' | 'medium' | 'large'

type Variant =
  | 'primary'
  | 'secundary'
  | 'outlined'
  | 'text'
  | 'rounded'
  | 'square'

interface MxButtonProps {
  readonly label?: string
  readonly variant: Variant
  readonly size: Size
}

/**
 *
 * @param props
 * @returns
 */
export const MxButton: React.VFC<MxButtonProps> = (props) => {
  const classes = useMxButtonStyles()

  return (
    <MuiButton
      classes={{
        root:
          props.variant === 'rounded'
            ? classes.rootRounded
            : props.variant === 'square'
            ? classes.rootSquare
            : classes.rootDefault,

        label: undefined
      }}
    >
      {props.label ? `${props.label}` : ''}
    </MuiButton>
  )
}
