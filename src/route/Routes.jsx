import React, { Component } from 'react'
import HomePage from '../pages/HomePage'
import BoardPage from '../pages/BoardPage'
import ProfilePage from '../pages/ProfilePage'

//React Routes, Route 사용시 배열로 관리하기
const routes = [
  {
    path: '/',
    element: <HomePage />,
    title: 'Home',
  },
  {
    path: '/board',
    element: <BoardPage />,
    title: 'Board',
  },
  {
    path: '/profile',
    element: <ProfilePage />,
    title: 'profile',
  },
]

export default routes
