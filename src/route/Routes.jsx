import React, { Component } from 'react';
import HomePage from '../pages/HomePage';
import BoardPage from '../pages/BoardPage';
import ProfilePage from '../pages/ProfilePage';
import PropsPage from '../pages/PropsPage';
import ThreePage from '../pages/ThreePage';
import CounterPage from '../pages/CounterPage';
import InputPage from '../pages/InputPage';
import GradePage from '../pages/GradePage';

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
    path: '/three',
    element: <ThreePage />,
    title: '조건부랜더링',
  },
  {
    path: '/usestate',
    element: <CounterPage />,
    title: 'useState연습',
  },
  {
    path: '/input',
    element: <InputPage />,
    title: 'input연습',
  },
  {
    path: '/grade',
    element: <GradePage />,
    title: '성적표',
  },
];

export default routes;
