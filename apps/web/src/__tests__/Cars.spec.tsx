import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { render, screen } from '@testing-library/react'

import { Cars } from '@/components'
import { describe, it, vi } from 'vitest'

vi.mock('@tanstack/react-query', async () => {
  return {
    useQuery: vi.fn().mockReturnValue({
      data: [
        { name: 'Car1', brand: 'Brand1', model_year: '2021' },
        { name: 'Car2', brand: 'Brand2', model_year: '2020' },
        { name: 'Car3', brand: 'Brand3', model_year: '2019' },
      ],
      status: 'success',
    }),
    useMutation: vi.fn().mockReturnValue({
      mutate: vi.fn(),
    }),
  }
})

describe('Cars', () => {
  it('should render table with right data', () => {
    const cars = [
      { name: 'Car1', brand: 'Brand1', model_year: '2021' },
      { name: 'Car2', brand: 'Brand2', model_year: '2020' },
      { name: 'Car3', brand: 'Brand3', model_year: '2019' },
    ]

    render(
      <BrowserRouter>
        <Cars />
      </BrowserRouter>,
    )

    cars.forEach(car => {
      expect(screen.getByText(car.name)).toBeInTheDocument()
      expect(screen.getByText(car.brand)).toBeInTheDocument()
      expect(screen.getByText(car.model_year)).toBeInTheDocument()
    })
  })
})
