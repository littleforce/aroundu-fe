import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="index.html">AroundU</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">文章列表</NavItem>
          <NavItem eventKey={2} href="#">写文章</NavItem>
        </Nav>
        <Nav pullRight>
          <NavDropdown eventKey={1} title="个人中心" id="basic-nav-dropdown">
            <MenuItem eventKey={1.1}>个人主页</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.2}>登出</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">登录</NavItem>
          <NavItem eventKey={2} href="#">注册</NavItem>
        </Nav>
      </Navbar>

    );
  }
}

export default Header;
