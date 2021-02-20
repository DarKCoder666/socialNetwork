import React, { useState } from 'react'
import { Menu } from 'antd'
import { AuthLayoutProps } from '../../../controllers/hooks/app/app.hook';
import './AppLayout.scss'
import { Link, useHistory } from 'react-router-dom';

export default function AppLayout({ children }) {
  const history = useHistory()
  const { navItems } = AuthLayoutProps()
  const [current, setCurrent] = useState()
  const menuItems = navItems.map(item => (
    <Menu.Item key={item.link} icon={<item.icon />}>
      <Link to={item.link1}>{item.title}</Link>
    </Menu.Item>
  ))

  const handleClick = e => {
    setCurrent(e.key)
    history.push(e.key)
  }

  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        {menuItems}
      </Menu>
      {children}
    </div>
  )
}
