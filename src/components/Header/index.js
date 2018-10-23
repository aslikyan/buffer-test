import './index.less';
import 'antd/dist/antd.css';
import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import RightMenu from './RightMenu';
import LeftMenu from './LeftMenu';

const Header = () => (
  <div className={"Header-block"}>
    <Container>
      <Menu secondary stackable>
        <LeftMenu/>
        <RightMenu/>
      </Menu>
    </Container>
  </div>
);
export default Header
