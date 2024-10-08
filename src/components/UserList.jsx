import React from 'react';

const User = ({ user, onRemove }) => {
  return (
    <div>
      <b>
        {' '}
        이름:{user.username} 이메일:{user.email}
        <button onClick={() => onRemove(user.id)}>삭제</button>
      </b>
    </div>
  );
};

const UserList = ({ users, onRemove }) => {
  return (
    <div>
      {users.map((user) => {
        return <User onRemove={onRemove} user={user} key={user.id} />;
      })}
    </div>
  );
};

export default UserList;
