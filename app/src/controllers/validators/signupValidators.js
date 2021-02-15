import { setAuthValidationErrors } from "../redux/actions/authActions"

export default function validateSignup({ password, password2 }, dispatch) {
  const errors = {}

  if (password !== password2) {
    errors.password2 = "Passwords do not match"
  }
  
  dispatch(setAuthValidationErrors({ signup: errors }))

  return Object.keys(errors).length === 0
}
