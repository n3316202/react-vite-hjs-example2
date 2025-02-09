import React, { Component } from 'react';
import HomePage from '../pages/HomePage';
import BoardPage from '../pages/BoardPage';
import ProfilePage from '../pages/ProfilePage';
import PropsPage from '../pages/PropsPage';
import ConditionalPage from '../pages/ConditionalPage';

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
  {
    path: '/props',
    element: <PropsPage />,
    title: '프롭스',
  },
  {
    path: '/conditional',
    element: <ConditionalPage />,
    title: '조건부랜더링',
  },
];

export default routes;
