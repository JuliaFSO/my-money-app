import React from 'react';

const MenuTree = props => {
  return (
    <li className='treeview'>
      <a>
        <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
        <i className='fa fa-angle-left pull-right'></i>
      </a>
      <ul className='treeview-menu'>
        {props.children}
      </ul>
    </li>
  );
}

export default MenuTree;
