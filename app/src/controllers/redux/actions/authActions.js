import {
  AUTH_CREATE_USER,
  AUTH_UPDATE_SIGNUP_FORM,
  AUTH_RESET_SIGNUP_FORM,
  AUTH_SET_FORM_VALIDATION_ERRORS,
  AUTH_UPDATE_SIGNIN_FORM,
  AUTH_SET_CURRENT_USER
} from '../actionTypes'

export const createUser = user => ({
  type: AUTH_CREATE_USER,
  payload: {
    user
  }
})

export const updateSignUpForm = newForm => ({
  type: AUTH_UPDATE_SIGNUP_FORM,
  payload: {
    newForm
  }
})

export const updateSignInForm = newForm => ({
  type: AUTH_UPDATE_SIGNIN_FORM,
  payload: {
    newForm
  }
})

export const resetSignUpForm = () => ({
  type: AUTH_RESET_SIGNUP_FORM
})

export const setAuthValidationErrors = newValidationErrorsState => ({
  type: AUTH_SET_FORM_VALIDATION_ERRORS,
  payload: {
    newValidationErrorsState
  }
})

export const setCurrentUser = user => ({
  type: AUTH_SET_CURRENT_USER,
  payload: {
    user
  }
})
