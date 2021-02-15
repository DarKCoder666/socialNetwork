import React from 'react'
import { useSignUpProps } from '../../../controllers/hooks/auth/auth.hook';
import Field from '../../../components/atoms/Field'

export default function SignUp() {
  const { fields, updateField, createUser, validationErrors } = useSignUpProps();

  const onInputChange = ({ target }) => {
    updateField(target.name, target.value);
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    createUser();
  }

  return (
    <div>
      <h1>SING UP</h1>
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
        <Field
          required
          id="password2"
          name="password2"
          type="password"
          label="Repeat Password"
          value={fields.password2}
          onChange={onInputChange}
          validationError={validationErrors?.password2}
          component={props => <input {...props} />}
        />
        <button type="submit">Create user</button>
      </form>
    </div>
  )
}
