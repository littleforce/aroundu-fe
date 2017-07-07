import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
class Header extends Component {
  constructor(props) {
    super(props);
  }
  handleFocus(event) {
    event.preventDefault();
  }
  render() {
    const guestNav = (
      <Nav pullRight>
        <NavDropdown eventKey={1} title="个人中心" id="basic-nav-dropdown">
          <MenuItem eventKey={1.1}>个人主页</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={1.2}>登出</MenuItem>
        </NavDropdown>
      </Nav>
    );
    const userNav = (
      <Nav pullRight>
        <NavItem eventKey={1} href="#" id="loginEntry" onClick={this.props.handleClick}>登录</NavItem>
        <NavItem eventKey={2} href="#" id="registerEntry" onClick={this.props.handleClick}>注册</NavItem>
      </Nav>
    );
    let rightNav;
    if (this.props.hasLogin === true) {
      rightNav = guestNav;
    } else {
      rightNav = userNav;
    }
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
        {rightNav}
      </Navbar>

    );
  }
}

export default Header;
