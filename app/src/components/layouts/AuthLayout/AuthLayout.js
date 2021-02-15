import React from 'react'
import MainNav from '../../molecules/MainNav'
import { AuthLayoutProps } from '../../../controllers/hooks/auth/auth.hook'

export default function AuthLayout({ children }) {
  const props = AuthLayoutProps()
  
  return (
    <div>
      <h1>Auth</h1>
      <MainNav {...props} />
      {children}
    </div>
  )
}
