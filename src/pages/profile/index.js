import React from 'react';
import {  Button, Menu, Avatar, Card, Row, Col, Input, Select } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import {
  Link
} from "react-router-dom";

import styles from './index.less';

export default function Profile({ to }) {

  const { SubMenu } = Menu;
  const { Meta } = Card;

  return (
    <>
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


          <SubMenu key="SubProfile" icon={<Avatar shape="square" icon={<UserOutlined />} /> }>
            <Menu.ItemGroup title="">
              <Menu.Item key="setting:1">My name</Menu.Item>
              <Menu.Item key="setting:2">Edit My Profile</Menu.Item>
              <Menu.Item key="setting:2">Log Out</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>

      <Row>
        <Col span={8} style={{ padding: 10}}>
          <Card bordered={true} className={styles.card} title="Profile picture" style={{ marginBottom: 10, borderRadius: 10}}>
            <Card
              hoverable
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta title="Santa" description="Europe Street beat"></Meta>
                <Link to="/profile" style={{ display: 'block', textAlign: 'center', paddingTop: 10 }}>Change</Link>
            </Card>
          </Card>

          <Card bordered={true} className={styles.card} title="Login security" style={{ borderRadius: 10}}>
            <div className={styles.button}>
              <Row>
                <Col span={12}>
                  <Button type="danger" htmlType="submit" styles={{ paddingRight: 5}}>
                  Activate
                  </Button>
                </Col>
                <Col span={12}>
                  <Button type="secondary" htmlType="submit">
                  Deactivate
                  </Button>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col span={16} style={{ padding: 10}}>
          <Card bordered={true} className={styles.card} title="My profile" style={{ borderRadius: 10}}>
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
              <Col span={21}>
                <Input.Group>
                  <Select defaultValue="Việt Nam" style={{ display: 'block'}}>
                    <Option value="Việt Nam">Việt Nam</Option>
                    <Option value="English">English</Option>
                  </Select>
                </Input.Group>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col span={3}><div>First Language</div></Col>
              <Col span={21}>
                <Input.Group>
                  <Select defaultValue="Việt Nam" style={{ display: 'block'}}>
                    <Option value="Việt Nam">Việt Nam</Option>
                    <Option value="English">English</Option>
                  </Select>
                </Input.Group>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col span={3}><div>Second Language</div></Col>
              <Col span={21}>
                <Input.Group>
                  <Select defaultValue="Việt Nam" style={{ display: 'block'}}>
                    <Option value="Việt Nam">Việt Nam</Option>
                    <Option value="English">English</Option>
                  </Select>
                </Input.Group>
              </Col>
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
          </Card>
        </Col>
      </Row>
    </>
  )
}

Profile.defaultProps = {
  to: '/'
}
