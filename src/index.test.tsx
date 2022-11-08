import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { MxButton } from '.'

describe('MxButton Unit Testing', () => {
  
  it('should display the label property', async () => {
    const label = "My Button";
    render(<MxButton label={label}/>)
    let htmlTag = await screen.findByText(label)
    expect(htmlTag.textContent).toEqual(label)
  })

})
