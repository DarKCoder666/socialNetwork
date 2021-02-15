import React from 'react'
import { Route } from 'react-router-dom'
import SignUp from '../../components/pages/SignUp'
import SignIn from '../../components/pages/SignIn'
import AuthLayout from '../../components/layouts/AuthLayout'

export default function Auth() {
  return (
    <Route exact path={['/auth/signup', '/auth/signin']}>
      <AuthLayout>
        <Route path="/auth/signup" component={SignUp} />
        <Route path="/auth/signin" component={SignIn} />
      </AuthLayout>
    </Route>
  )
}
