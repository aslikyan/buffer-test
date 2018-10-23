import React from 'react';
import { Menu, Input } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import logo from '@src/logos/peertree-logo.png';

export default () => (
  <Menu.Menu>
    <Menu.Item>
      <NavLink to={''}>
        <img alt={'logo'} className={'Header-logo'} src={logo}/>
      </NavLink>
    </Menu.Item>
    <Menu.Item>
      <Input icon='search' placeholder='Search...' />
    </Menu.Item>
  </Menu.Menu>
)
