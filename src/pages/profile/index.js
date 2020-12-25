import React from 'react';
import {  Button, Menu, Avatar, Card, Row, Col } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import {
  Link
} from "react-router-dom";

import styles from './index.less';

export default function Profile({ to }) {

  const { SubMenu } = Menu;

  return (
    <>
    {/* <div className={styles.navbar}> */}

        <Menu mode="horizontal" className={styles.menu}>
          <Menu.Item key="mail" icon={<MailOutlined />}>
            A
          </Menu.Item>
          <Menu.Item key="app" icon={<AppstoreOutlined />}>
            B
          </Menu.Item>
          <SubMenu key="SubMenu" icon={<SettingOutlined />} title="C">
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="/profile" target="_blank" rel="noopener noreferrer">
              D
            </a>
          </Menu.Item>


          <SubMenu key="SubProfile" icon={<Avatar icon={<UserOutlined />} />} title="My name">
            <Menu.ItemGroup title="">
              <Menu.Item key="setting:1">My name</Menu.Item>
              <Menu.Item key="setting:2">Edit My Profile</Menu.Item>
              <Menu.Item key="setting:2">Log Out</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>

      {/* <div>
        <Menu selectedKeys={[]} mode="horizontal">
          <SubMenu key="SubMenu" icon={<Avatar icon={<UserOutlined />} />} title="My name">
            <Menu.ItemGroup title="">
              <Menu.Item key="setting:1">My name</Menu.Item>
              <Menu.Item key="setting:2">Edit My Profile</Menu.Item>
              <Menu.Item key="setting:2">Log Out</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </div> */}
    {/* </div> */}

      <Row justify="space-between" className={styles.container} align="middle">
        <Col span={24}>
          <Card bordered={true} className={styles.card} style={{ width: 1000}}>
            <div className={styles.boxName}>
              <div className={styles.name}>My profile</div>
              <Row className={styles.row}>
                <Col span={3}><div>Username</div></Col>
                <Col span={21}><input type="text" className={styles.input}/></Col>
              </Row>
              <Row className={styles.row}>
                <Col span={3}><div>First name</div></Col>
                <Col span={21}><input type="text" className={styles.input}/></Col>
              </Row>
              <Row className={styles.row}>
                <Col span={3}><div>Country</div></Col>
                <Col span={21}><input type="text" className={styles.input}/></Col>
              </Row>
              <Row className={styles.row}>
                <Col span={3}><div>First Language</div></Col>
                <Col span={21}><input type="text" className={styles.input}/></Col>
              </Row>
              <Row className={styles.row}>
                <Col span={3}><div>Second Language</div></Col>
                <Col span={21}><input type="text" className={styles.input}/></Col>
              </Row>
              <Row className={styles.row}>
                <Col span={3}><div>Address</div></Col>
                <Col span={21}><input type="text" className={styles.input}/></Col>
              </Row>
              <Row className={styles.row}>
                <Col span={3}><div>City</div></Col>
                <Col span={21}><input type="text" className={styles.input}/></Col>
              </Row>
              <Row className={styles.row}>
                <Col span={3}><div>Post code / Zip</div></Col>
                <Col span={21}><input type="text" className={styles.input}/></Col>
              </Row>
              <Row className={styles.row}>
                <Col span={3}><div>Email</div></Col>
                <Col span={21}><input type="text" className={styles.input}/></Col>
              </Row>
            </div>

            <Row>
              <Col span={8}>
                <div className={styles.boxImage}>
                  <span className={styles.name}>Profile picture</span>
                  <div className={styles.image}>
                    <img src="https://picsum.photos/200" alt=""/>
                  </div>
                  <Link to={to}>Change</Link>
                </div>
              </Col>
            </Row>

            <div className={styles.button}>
              <div className={styles.name}>Login security</div>

              <Row>
                <Col span={8}>
                  <Button type="danger" htmlType="submit" styles={{ paddingRight: 5}}>
                  Activate
                  </Button>
                </Col>
                <Col span={8}>
                  <Button type="secondary" htmlType="submit">
                  Deactivate
                  </Button>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  )
}

Profile.defaultProps = {
  to: '/'
}
