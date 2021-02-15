import {
  AUTH_RESET_SIGNUP_FORM,
  AUTH_RESET_SIGNIN_FORM
} from "../redux/actionTypes"
import api from '../api'

export const createUser = (history) => {
  return async (dispatch, getStore) => {
    const user = getStore().auth.forms.signup
    let result
    try {
      result = await api.auth.signUp({
        email: user.email,
        password: user.password
      })
    } catch (e) {
      return alert(e.message)
    }

    dispatch({ type: AUTH_RESET_SIGNUP_FORM })
    history.push('/auth/signin')
  }
}

export const signIn = (history) => {
  return async (dispatch, getStore) => {
    const user = getStore().auth.forms.signin
    let result
    try {
      result = await api.auth.signIn({
        email: user.email,
        password: user.password
      })
      if(!result.data.success) return alert(result.data.message)
    } catch (e) {
      return alert(e.message)
    }

    dispatch({ type: AUTH_RESET_SIGNIN_FORM })
    localStorage.setItem('token', result.data.data.token)
    history.push('/')
  }
}
