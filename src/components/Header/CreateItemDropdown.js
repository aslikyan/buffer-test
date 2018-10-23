import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import { openCreateItemModal } from '../../actions/homepage';

class CreateItemDropdown extends PureComponent {
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a onClick={() => this.props.openCreateItemModal('Organization')}>Organization</a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => this.props.openCreateItemModal('Library')}>Library</a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => this.props.openCreateItemModal('Course')}>Course</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Dropdown overlay={menu} trigger = {['click']}>
          <a style={{color: 'black'}} href= {null}>Create</a>
        </Dropdown>
      </div>
    );
  }
}

export default connect(
  null,
  {
    openCreateItemModal,
  },
)(CreateItemDropdown);