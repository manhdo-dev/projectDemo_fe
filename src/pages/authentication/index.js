import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
import qrCode from './qrcode.png';

import styles from './index.less';

export default function Authentication({to}) {
  return (
    <Row justify="space-between" className={styles.container} align="middle">
      <Col span={24}>
        <Card bordered={true} className={styles.card} >
          <div className={styles.edit}>
            <h3>Manage two-factor authentication</h3>
            <input className={styles.input} type="text" placeholder="Editing user: Name"/>
          </div>

          <div className={styles.content}>
            <div className={styles.qr}>
              <p>1. Scan code or enter key</p>
              <span>Scan the code below with your authentication app to add this account. Some authentication apps also allow you to type in the text version insteatd</span>
              <img className={styles.qrCode} src={qrCode} alt=""/>
            </div>
            <div className={styles.code}>
              <p>Enter Code from Authenticator App</p>
              <input className={styles.inputCode} type="text" maxLength="6"/>
              <div className={styles.button}>
                <Link to={to}>Activate</Link>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  )
}

Authentication.defaultProps = {
  to: '/'
}
