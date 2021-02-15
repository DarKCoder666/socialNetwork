import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AuthRoutes from './Auth'
import Home from './Home'

export default function index() {
  return (
    <BrowserRouter>
      <AuthRoutes />
      <Home />
    </BrowserRouter>
  )
}
