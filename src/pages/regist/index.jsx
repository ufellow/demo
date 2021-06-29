import { useState } from 'react'
import router from 'umi/router';
import { Input, Select, message, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './index.css'
import IconFont from './../../assets/iconlink'
import { useEffect } from 'react';
const Regist = (props) => {
    const { Option } = Select;
    const [phone, setPhone] = useState(null);
    const [password, setPassword] = useState('');
    const messageInfo = (content, iconName) => {
        message.info({
            content: content,
            className: 'custom-class',
            duration: 3,
            icon: <IconFont type={iconName} />,
            style: {
                marginTop: '20rem',
            },
        });
    };
    let timeChange;
    const [time, setTime] = useState(60);
    const [btnDisable, setBtnDisable] = useState(false);
    const [btnContent, setBtnContent] = useState('获取验证码')
    useEffect(() => {
        clearInterval(timeChange);
        return () => { clearInterval(timeChange) }
    }, [])
    useEffect(() => {
        if (time > 0 && time < 60) {
            setBtnContent(`${time}s后重发`);
        } else {
            clearInterval(timeChange);
            setBtnDisable(false);
            setTime(60);
            setBtnContent('获取验证码');
        }
    }, [time])
    const getPhoneCaptcha = () => {
        timeChange = setInterval(() => setTime(t => --t), 1000);
        setBtnDisable(true);
    };
    const register = () => {
        const phone_reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
        const icon = 'icon-error';
        if (!(phone_reg.test(phone))) {
            console.log('手机号格式错误');
            messageInfo('手机号格式错误', icon)
        } else if (password.length < 6) {
            messageInfo('密码不少于6位', icon)
        } else if (password.length > 16) {
            messageInfo('密码不多于16位', icon)
        }
        else {
            router.push({
                // pathname: '/verify',
                // query: {
                //     phone: phone,
                // },
            });
        }
    }
    return (
        <div className={styles.regist_container}>
            {/* <div className = {`${styles.regist_title} bg-color-e60026`}>手机号注册</div> */}
            <div className={styles.input_box}>
                <Input placeholder='输入手机号'
                    value={phone} type='number'
                    onChange={(e) => setPhone(e.target.value)}
                    prefix={<IconFont type='icon-shouji' className='color-b5b5b5' />}
                    bordered={false} />
            </div>
            <div className={styles.input_box}>
                <Input.Password placeholder="设置登陆密码,6-16位"
                    prefix={<IconFont type='icon-mima' className='color-b5b5b5' />}
                    bordered={false}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className={styles.captcha_box}>
                <div className={styles.input_box}><Input placeholder='输入验证码' type='number' bordered={false} /></div>
                <Button className={styles.captch_btn} onClick={getPhoneCaptcha} disabled={btnDisable}>{btnContent}</Button>
            </div>

            <button className={`${styles.regist_nextstep} bg-color-e60026`}
                onClick={register} >
                注册</button>
        </div>
    )
}
export default Regist;