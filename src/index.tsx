import * as React from 'react'
import { Button as MuiButton, ButtonProps } from '@material-ui/core'

/**
 *
 */
interface MxButtonProps extends ButtonProps {
  /** Caption text of button */
  readonly label?: string
}

/**
 *
 * @param props
 * @returns
 */
export const MxButton: React.VFC<MxButtonProps> = (props) => {
  return <MuiButton {...props}>{props.label ? `${props.label}` : ''}</MuiButton>
}
