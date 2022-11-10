import * as React from 'react'
import { MxButton } from 'mx-button'

const App = () => {
  return (
    <div>
      <MxButton label={'Mx Button small'} variant='primary' />
      <MxButton label={'Mx Button small'} variant='secundary' />
      <MxButton label={'Mx Button small'} variant='outlined' />
      <MxButton label={'Mx Button small'} variant='text' />
      <MxButton label={'Mx Button small'} variant='rounded' />
      <MxButton label={'Mx Button small'} variant='square' />
    </div>
  )
}

export default App
