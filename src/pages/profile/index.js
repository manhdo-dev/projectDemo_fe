import React from 'react';
import {  Button, Menu, Avatar, Card } from 'antd';
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

      <div className={styles.container}>
        <Card bordered={true} className={styles.card}>
          <div className={styles.boxName}>
            <div className={styles.name}>My profile</div>
            <div className={styles.item}>
              <p>Username</p>
              <input type="text" className={styles.input}/>
            </div>
            <div className={styles.item}>
              <p>First name</p>
              <input type="text" className={styles.input}/>
            </div>
            <div className={styles.item}>
              <p>Country</p>
              <input type="text" className={styles.input}/>
            </div>
            <div className={styles.item}>
              <p>First Language</p>
              <input type="text" className={styles.input}/>
            </div>
            <div className={styles.item}>
              <p>Second Language</p>
              <input type="text" className={styles.input}/>
            </div>
            <div className={styles.item}>
              <p>Address</p>
              <input type="text" className={styles.input}/>
            </div>
            <div className={styles.item}>
              <p>City</p>
              <input type="text" className={styles.input}/>
            </div>
            <div className={styles.item}>
              <p>Post code / Zip</p>
              <input type="text" className={styles.input}/>
            </div>
            <div className={styles.item}>
              <p>Email</p>
              <input type="text" className={styles.input}/>
            </div>
          </div>

          <div className={styles.boxImage}>
            <span className={styles.name}>Profile picture</span>
            <div className={styles.image}>
              <img src="https://picsum.photos/200" alt=""/>
            </div>
            <Link to={to}>Change</Link>
          </div>

          <div className={styles.button}>
            <div className={styles.name}>Login security</div>
            <Button type="danger" htmlType="submit" styles={{ paddingRight: 5}}>
              Activate
            </Button>
            &nbsp;
            <Button type="secondary" htmlType="submit">
              Deactivate
            </Button>
          </div>
        </Card>
      </div>
    </>
  )
}

Profile.defaultProps = {
  to: '/'
}
