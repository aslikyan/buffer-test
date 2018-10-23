import React, {Component} from 'react'
import {Menu, Dropdown, Message, Form, Button, Icon} from 'semantic-ui-react'
import CreateModal from './CreateModal';
import CreateItemDropdown from './CreateItemDropdown';

export default class RightMenu extends Component {
  render() {
    return (<Menu.Menu position='right'>
      <Menu.Item>
        <Dropdown closeOnChange={false} text='Sign up' floating={true} labeled={true} button={true} className='primary'>
          <Dropdown.Menu>
            <div>
              <Message attached={true} header='Welcome to our site!' content='Fill out the form below to sign-up for a new account'/>
              <Form className='attached fluid segment'>
                <Form.Group widths='equal'>
                  <Form.Input fluid={true} label='First Name' placeholder='First Name' type='text'/>
                  <Form.Input fluid={true} label='Last Name' placeholder='Last Name' type='text'/>
                </Form.Group>
                <Form.Input label='Username' placeholder='Username' type='text'/>
                <Form.Input label='Password' type='password'/>
                <Form.Checkbox inline={true} label='I agree to the terms and conditions'/>
                <Button primary={true}>Submit</Button>
              </Form>
              <Message attached={true} warning={true}>
                <Icon name='help'/>
                Already signed up?&nbsp;<a href={null}>Login here</a>&nbsp;instead.
              </Message>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
      <Menu.Item name='login'/>
      <Menu.Item>
      <CreateItemDropdown/>
      <CreateModal/>
      </Menu.Item>
    </Menu.Menu>)
  }
}
