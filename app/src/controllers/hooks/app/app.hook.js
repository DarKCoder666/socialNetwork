import { useAuthorizedState } from "../auth/auth.hook"
import { UserOutlined, UserAddOutlined, BorderlessTableOutlined } from '@ant-design/icons';

export function AuthLayoutProps() {
  const isAuthorized = useAuthorizedState()
  const navItems = isAuthorized ? [
    { title: 'Feed', link: '/feed', icon: BorderlessTableOutlined }
  ] : [
      { title: 'SignIn', link: '/auth/signin', icon: UserOutlined },
      { title: 'SignUp', link: '/auth/signup', icon: UserAddOutlined }
    ]

  return {
    navItems
  }
}
