import React from 'react';
import GrandChild from './GrandChild';

function Child({ user }) {
  return <GrandChild user={user} />;
}

export default Child;
