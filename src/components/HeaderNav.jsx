import React from 'react'
import { Link } from 'react-router-dom'

const HeaderNav = () => {
  return (
    <div className="text-center mt-3">
      <Link to={'/'}>Home</Link> |<Link to={'/board'}>board</Link> |
      <Link to={'/profile'}>Profile</Link> |
    </div>
  )
}

export default HeaderNav
