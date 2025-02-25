import React from 'react';
import { Outlet } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <h1 className="text-center mt-5">
      프로필 페이지 입니다.
      <Outlet />
    </h1>
  );
};

export default ProfilePage;
