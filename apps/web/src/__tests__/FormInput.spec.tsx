import React from 'react'

import { render, screen } from '@testing-library/react'

import { FormInput } from '@/components'
import { describe, it } from 'vitest'

describe('FormInput', () => {
  it('should render input with label', () => {
    render(<FormInput id="any" label="Any" />)
    const input = screen.getByLabelText('Any')

    expect(input).toBeInTheDocument()
  })
})
