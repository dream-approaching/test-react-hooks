import React from 'react';
import { Link } from 'react-router-dom';

function Back() {
  return (
    <Link style={{ margin: 10, textDecoration: 'none', display: 'block' }} to="/">
      返回
    </Link>
  );
}

export default Back;
