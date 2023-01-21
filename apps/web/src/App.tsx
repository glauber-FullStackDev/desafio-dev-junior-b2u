import React from 'react'
import { ToastContainer } from 'react-toastify'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import RoutesList from './routes'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RoutesList />
      <ToastContainer />
    </QueryClientProvider>
  )
}

export default App
