import React from 'react'
import NavItem from '../../atoms/NavItem'

export default function MainNav({ navItems }) {
  const navLinks = navItems.map((item, index) => (
    <NavItem key={index} {...item} />
  ))

  return (
    <div>
      {navLinks}
    </div>
  )
}
