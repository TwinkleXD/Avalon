import { Layout } from 'antd';
import styled from 'styled-components';
import { routesRender } from '../routes.js';
import routes from '../routes.js';

import { XDMenus } from '../components/XDMenus'

export default function Layouts () {
  const { Header, Footer, Content } = Layout;

  return (
    <LayoutWrap>
      <Layout>
        <Header>
          <XDMenus routes={routes} />
        </Header>
        <Content>
          {routesRender}
        </Content>
        <Footer>Copyright@TwinkleXD</Footer>
      </Layout>
    </LayoutWrap>
 )
}

const LayoutWrap = styled.div`
  background: #98ccc5;
  height: 100%;
  .ant-layout {
    background: transparent;
    height: 100%;
    .ant-layout-header {
      background: transparent;
    }
    .ant-layout-content {
      height: 100%;
      background: #FFFFFF;
      margin: 20px 50px;
    }
    .ant-layout-footer {
      text-align: center;
    }
  }
`;
