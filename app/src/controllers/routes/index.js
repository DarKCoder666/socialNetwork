import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AppLayout from '../../components/layouts/AppLayout'
import { checkAuthorization } from '../thunks/auth.thunk'
import AuthRoutes from './Auth'
import Home from './Home'

export default function Index() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuthorization())
  }, [dispatch])

  return (
    <BrowserRouter>
      <AppLayout>
        <AuthRoutes />
        <Home />
      </AppLayout>
    </BrowserRouter>
  )
}
