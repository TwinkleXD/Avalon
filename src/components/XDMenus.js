import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu } from 'antd';

export function XDMenus(props) {

  const { routes } = props;
  const [menuKey, setMenuKey] = useState('/')

  return (
    <MenuWrap>
      <Menu
        mode="horizontal"
        defaultActiveFirst={menuKey}
        onClick={(e) => setMenuKey(e)}
        >
          {routes.map((item) => {
            return (
              <Menu.Item key={item.path}>
                <Link to={item.path}>{item.name}</Link>
              </Menu.Item>
            )
          })}
      </Menu>
    </MenuWrap>
  )
}

const MenuWrap = styled.div`
ul {
  list-style:none;
  li {
    display: inline-block;
  }
}
a {
  text-decoration: none;
}
`;
