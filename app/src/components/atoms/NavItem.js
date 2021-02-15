import React from 'react'
import { Link } from 'react-router-dom'

export default function NavItem({ title, link }) {
  return (
    <Link to={link}>{title}</Link>
  )
}
