import React from 'react';

import MenuItem from './menuItem';
import MenuTree from './menuTree';

const Menu = props => {
  return (
    <ul className='sidebar-menu'>
      <MenuItem path='#' label='Dashboard' icon='dashboard' />
      <MenuTree label='Register' icon='edit'>
        <MenuItem path='#/billingCycles' label='Billing Cycles' icon='usd' />
      </MenuTree>
    </ul>
  );
}

export default Menu;
