import React from 'react'
import { Route } from 'react-router-dom'
import SignUp from '../../components/pages/SignUp'
import SignIn from '../../components/pages/SignIn'

export default function Auth() {
  return (
    <Route exact path={['/auth/signup', '/auth/signin']}>
      <Route path="/auth/signup" component={SignUp} />
      <Route path="/auth/signin" component={SignIn} />
    </Route>
  )
}
