import React from 'react';
import { Form, Input, Button} from 'antd';

import styles from './index.less';

export default function Login() {

  return (
    <div className={styles.container}>
      <div className={styles.title}>FORGOT PASSWORD</div>
        <Form
          name="basic"
          initialValues={{ remember: true }}
        >
          <Form.Item
            // label="Verification codes"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]
          }
          >
            <div className={styles.heading}>Verification codes</div>
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="danger" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
    </div>
  )
}
