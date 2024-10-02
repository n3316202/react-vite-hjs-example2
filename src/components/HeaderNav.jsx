import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../route/Routes'

const HeaderNav = () => {
  return (
    <div className="text-center mt-3">
      {routes.map((route, index) => (
        <Link key={route.path || index} to={route.path}>
          {' '}
          | {route.title}
        </Link>
      ))}
    </div>
  )
}

export default HeaderNav
