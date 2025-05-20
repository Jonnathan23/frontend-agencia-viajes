import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import Router from './router'
import { ClerkProvider } from '@clerk/clerk-react'

const queryClient = new QueryClient()
const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ClerkProvider publishableKey={clerkPublishableKey}>
            <QueryClientProvider client={queryClient}>
                <Router />
            </QueryClientProvider>
        </ClerkProvider>
    </StrictMode>,
)