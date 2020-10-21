import React from 'react';
import { Layout, Menu, ConfigProvider } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { BasicLayoutProps } from '@ant-design/pro-layout';
import styles from './index.less';

const { Header, Content, Sider } = Layout;

export default class BasicLayout extends React.Component<BasicLayoutProps> {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  renderContent = () => {
    const { children } = this.props;
    if (!(window as any).__POWERED_BY_QIANKUN__) {
      return (
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className={styles.logo} />
            <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
              <Menu.Item key='1' icon={<UserOutlined />}>
                nav 1
              </Menu.Item>
              <Menu.Item key='2' icon={<VideoCameraOutlined />}>
                nav 2
              </Menu.Item>
              <Menu.Item key='3' icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className='site-layout'>
            <Header className='site-layout-background' style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
            </Header>
            <Content
              className='site-layout-background'
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      );
    } else {
      return (
        {children}
      );
    }
  }

  render() {
    return (
      <ConfigProvider prefixCls='cscs'>
        {this.renderContent()}
      </ConfigProvider>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       {this.renderContent()}
  //     </div>
  //   );
  // }
}
