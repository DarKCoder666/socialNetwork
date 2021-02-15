import { initialSignUpFormValues, initialAuthValidationErrors, initialSignInFormValues } from "../../constants/auth/signup"
import {
  AUTH_CREATE_USER,
  AUTH_UPDATE_SIGNUP_FORM,
  AUTH_RESET_SIGNUP_FORM,
  AUTH_RESET_SIGNIN_FORM,
  AUTH_SET_FORM_VALIDATION_ERRORS,
  AUTH_UPDATE_SIGNIN_FORM,
  AUTH_SET_CURRENT_USER
} from "../actionTypes"

const initialState = {
  currentUser: {},
  users: [],
  lastUserID: 0,
  forms: {
    signup: initialSignUpFormValues,
    signin: initialSignInFormValues
  },
  validationErrors: initialAuthValidationErrors
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_CREATE_USER:
      return {
        ...state,
        users: [
          ...state.users,
          {
            ...action.payload.user,
            id: state.lastUserID
          }
        ],
        lastUserID: state.lastUserID + 1
      }
    case AUTH_UPDATE_SIGNUP_FORM:
      return {
        ...state,
        forms: {
          ...state.forms,
          signup: action.payload.newForm
        }
      }
    case AUTH_RESET_SIGNUP_FORM:
      return {
        ...state,
        forms: {
          ...state.forms,
          signup: initialSignUpFormValues
        }
      }
    case AUTH_RESET_SIGNIN_FORM:
      return {
        ...state,
        forms: {
          ...state.forms,
          signin: initialSignInFormValues
        }
      }
    case AUTH_UPDATE_SIGNIN_FORM:
      return {
        ...state,
        forms: {
          ...state.forms,
          signin: action.payload.newForm
        }
      }
    case AUTH_SET_FORM_VALIDATION_ERRORS:
      return {
        ...state,
        validationErrors: {
          ...state.validationErrors,
          ...action.payload.newValidationErrorsState
        }
      }
    case AUTH_SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.user
      }
    default:
      return state
  }
}
