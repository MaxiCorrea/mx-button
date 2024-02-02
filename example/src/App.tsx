import * as React from 'react'
import { MxButton } from '@maxicorrea/mx-button'

const App = () => {
  return (
    <div style={{ display: 'flex', margin: '20px', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center' 
        }}
      >
        <span style={{width : "100px"}}>Primary</span>
        <MxButton label={'Button'} variant='primary' size='small'/>
        <MxButton label={'Button'} variant='primary' size='medium'/>
        <MxButton label={'Button'} variant='primary' size='large'/>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <span style={{width : "100px"}}>Secundary</span>
        <MxButton label={'Button'} variant='secondary' size='small'/>
        <MxButton label={'Button'} variant='secondary' size='medium'/>
        <MxButton label={'Button'} variant='secondary' size='large'/>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <span style={{width : "100px"}}>Outlined</span>
        <MxButton label={'Button'} variant='outlined' size='small'/>
        <MxButton label={'Button'} variant='outlined' size='medium'/>
        <MxButton label={'Button'} variant='outlined' size='large'/>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <span style={{width : "100px"}}>Text</span>
        <MxButton label={'Button'} variant='text' size='small'/>
        <MxButton label={'Button'} variant='text' size='medium'/>
        <MxButton label={'Button'} variant='text' size='large'/>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <span style={{width : "100px"}}>Rounded</span>
        <MxButton label={'Mx Button small'} variant='rounded' size='small'/>
        <MxButton label={'Mx Button medium'} variant='rounded' size='medium'/>
        <MxButton label={'Mx Button large'} variant='rounded' size='large'/>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <span style={{width : "100px"}}>Square</span>
        <MxButton label={'Mx Button small'} variant='square' size='small'/>
        <MxButton label={'Mx Button medium'} variant='square' size='medium'/>
        <MxButton label={'Mx Button large'} variant='square' size='large'/>
      </div>
    </div>
  )
}

export default App
