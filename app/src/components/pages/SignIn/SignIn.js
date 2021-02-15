import React from 'react'
import { useSignInProps } from '../../../controllers/hooks/auth/auth.hook';
import Field from '../../../components/atoms/Field'

export default function SignIn() {
  const { fields, updateField, signIn, validationErrors } = useSignInProps();

  const onInputChange = ({ target }) => {
    updateField(target.name, target.value);
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    signIn()
  }

  const errorMessage = validationErrors.general ? <p>{validationErrors.general}</p> : ""

  return (
    <div>
      <h1>SIGN IN</h1>
      {errorMessage}
      <form onSubmit={onSubmit}>
        <Field
          required
          id="email"
          name="email"
          type="email"
          label="Email"
          value={fields.email}
          onChange={onInputChange}
          validationError={validationErrors?.email}
          component={props => <input {...props} />}
        />
        <Field
          required
          id="password"
          name="password"
          type="password"
          label="Password"
          value={fields.password}
          onChange={onInputChange}
          validationError={validationErrors?.password}
          component={props => <input {...props} />}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}
