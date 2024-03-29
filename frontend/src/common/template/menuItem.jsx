import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = props => {
  return (
    <li>
      <Link to={props.path} replace>
          <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
