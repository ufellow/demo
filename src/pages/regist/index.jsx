import { useState } from 'react'
import { Input, Select, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './index.css'
import IconFont from './../../assets/iconlink'
const Regist = (props) => {
    const { Option } = Select;
    const [phone, setPhone] = useState(null);
    const messageInfo = (content, icon) => {
        message.info({
            content: '手机号格式错误',
            className: 'custom-class',
            duration: 2,
            icon: <IconFont type='icon-jiantou' />,
            style: {
                marginTop: '10rem',
            },
        });
    };
    const checkMessage = () => {
        const content = '密码长度为6-18位';
        icon = <IconFont type='' />;
    }
    return (
        <div className={styles.regist_container}>
            {/* <div className = {`${styles.regist_title} bg-color-e60026`}>手机号注册</div> */}
            <div className={styles.input_box}>
                <Input placeholder='输入手机号'
                    value={phone} type='number'
                    onChange={(e) => setPhone(e.target.value)}
                    prefix={<UserOutlined />}
                    bordered={false} />
            </div>
            <div className={styles.input_box}>
                <Input.Password placeholder="设置登陆密码"
                    prefix={<UserOutlined />}
                    bordered={false} />
            </div>

            <div className={`${styles.regist_nextstep} bg-color-e60026`} onClick={checkMessage}>下一步</div>
        </div>
    )
}
export default Regist;