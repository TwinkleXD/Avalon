import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

import { CMenus } from '@/components/CMenus.js';

export default function Notes () {
  const { Content } = Layout;
  const menusData = [
    {name: 'React学习笔记', key: 'react'},
    {name: '知识点展开', key: 'expansion'},
    {name: '项目', key: 'project'},
    {name: 'littleQ速记', key: 'littleQ'},
    {name: '公共组件', key: 'Ccomponents'},
  ]

  return (
    <NotesWrap>
      <CMenus data={menusData} />
      <Content>
        notes
      </Content>
    </NotesWrap>
  )
}

const NotesWrap = styled.div`
/* height: 100%; */
display: flex;
`;