import React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';

export function CMenus(props) {

  const { data } = props;

  return (
    <MenuWrap>
      <Menu
        mode="vertical"
        >
          {data.map((item) => {
            return (
              <Menu.Item key={item.key}>
                {item.name}
              </Menu.Item>
            )
          })}
      </Menu>
    </MenuWrap>
  )
}

const MenuWrap = styled.div`

`;
