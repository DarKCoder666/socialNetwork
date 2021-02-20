import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { updateSignInForm, updateSignUpForm } from '../../redux/actions/authActions'
import { createUser, signIn } from "../../thunks/auth.thunk"

export function useSignUpProps() {
  const dispatch = useDispatch()
  const history = useHistory()
  const authState = useSelector(state => state.auth)
  const fields = authState.forms.signup
  const { validationErrors } = authState
  const updateField = (key, value) => {
    dispatch(updateSignUpForm({
      ...fields,
      [key]: value
    }))
  }

  return {
    fields,
    validationErrors: validationErrors.signup,
    updateField,
    createUser: () => dispatch(createUser(history))
  }
}

export function useSignInProps() {
  const dispatch = useDispatch()
  const history = useHistory()
  const authState = useSelector(state => state.auth)
  const fields = authState.forms.signin
  const { validationErrors } = authState
  const updateField = (key, value) => {
    dispatch(updateSignInForm({
      ...fields,
      [key]: value
    }))
  }

  return {
    fields,
    validationErrors: validationErrors.signin,
    updateField,
    signIn: () => dispatch(signIn(history))
  }
}

export function useAuthorizedState() {
  const authState = useSelector(state => state.auth)

  return authState.isAuthorized
}
