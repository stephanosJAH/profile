import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import '@/styles/globals.css'

import MainLayout from '@/layouts/MainLayout'
import LandingPage from '@/pages/LandingPage'
import MePage from '@/pages/MePage'
import ExperiencesPage from '@/pages/ExperiencesPage'
import ExperienceDetailPage from '@/pages/ExperienceDetailPage'
import ContactPage from '@/pages/ContactPage'
import NotFoundPage from '@/pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    element: <MainLayout />,
    children: [
      { path: '/me', element: <MePage /> },
      { path: '/experiences', element: <ExperiencesPage /> },
      { path: '/experiences/:slug', element: <ExperienceDetailPage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
