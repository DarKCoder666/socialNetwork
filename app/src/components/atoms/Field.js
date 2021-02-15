import React from 'react'

export default function Field({
  component,
  validationError,
  label,
  ...rest
}) {
  const error = validationError ? <p>{validationError}</p> : ""

  return (
    <div>
      <label htmlFor={rest.name}>{label}</label>
      {component(rest)}
      {error}
    </div>
  )
}
