import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CssBaseline } from '@mui/material'
import './index.css'
import App from './App.tsx'

const apiQueryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={apiQueryClient}>
      <CssBaseline />
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
