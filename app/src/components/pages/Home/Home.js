import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>WELCOME!!!</h1>
      <h2> <Link to="/auth/signin">Authorize</Link> </h2>
    </div>
  )
}
