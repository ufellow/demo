import React from 'react';
import styles from './style.css'
import RowList from './../list'
import IconFont from './../../assets/iconlink'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const Center = (props) => {
    const isLogin = false;
    if (!props.isShow) {
        return null;
    }
    const list_qita = [
        {
            icon: 'icon-shezhi',
            name: '设置',
            detail: []
        },
        {
            icon: 'icon-dingshi',
            name: '定时关闭',
            detail: []
        },
        {
            icon: 'icon-personality-settings',
            name: '个性装扮',
            detail: []
        },
        {
            icon: 'icon-erji',
            name: '边听边存',
            detail: []
        },
        {
            icon: 'icon-chakantiezigengduoheimingdan',
            name: '音乐黑名单',
            detail: []
        },
        {
            icon: 'icon-naozhong',
            name: '音乐闹钟',
            detail: []
        }
    ]
    const list01 = [
        {
            icon: 'icon-xiaoxi',
            name: '我的消息',
            detail: []
        },
        {
            icon: 'icon-bei',
            name: '云贝中心',
            detail: '免费兑换黑胶VIP'
        },
        {
            icon: 'icon-ipr_famingchuangxin',
            name: '创作者中心',
            detail: []
        }]
    const list_yinyuefuwu = [
        {
            icon: 'icon-piaowu',
            name: '云村有票',
            detail: []
        },
        {
            icon: 'icon-gouwuche',
            name: '商城',
            detail: []
        },
        {
            icon: 'icon-iconset0263',
            name: '游戏专区',
            detail: []
        },
        {
            icon: 'icon-lingdang',
            name: '口袋彩铃',
            detail: []
        }
    ]
    const list = [
        {
            icon: 'icon-icon3',
            name: '我的订单',
            detail: []
        },
        {
            icon: 'icon-youhuiquan1',
            name: '优惠券',
            detail: []
        },
        {
            icon: 'icon-icon-test',
            name: '我的客服',
            detail: []
        },
        {
            icon: 'icon-fenxiang',
            name: '分享网易云音乐',
            detail: []
        },
        {
            icon: 'icon-guanyu',
            name: '关于',
            detail: []
        }
    ]
    return (
        <div className={styles.center_container}>
            <div className={styles.center_main}>
                <div>
                    <div className={styles.center_top}>
                        <div className={styles.avatar}>
                            {isLogin ? <img></img> : <Avatar icon={<UserOutlined />} />}
                            <span className={styles.nickName}>昵称</span>
                        </div>
                        <span className={styles.check_in}>签&nbsp;到</span>
                    </div>
                    <div className={styles.center_list}>
                        <RowList centerlist={list01}></RowList>
                    </div>
                    <div className={styles.center_list}>
                        <div className={`${styles.list_title} font-size-12 bg-color-ffffff color-b5b5b5`} >音乐服务</div>
                        <RowList centerlist={list_yinyuefuwu}></RowList>
                    </div>
                    <div className={styles.center_list}>
                        <div className={`${styles.list_title} font-size-12 bg-color-ffffff color-b5b5b5`} >其他</div>
                        <RowList centerlist={list_qita}></RowList>
                    </div>
                    <div className={styles.center_list}>
                        <RowList centerlist={list}></RowList>
                    </div>

                </div>
                <div className={`${styles.logout} bg-color-ffffff`}>
                    退出登录
                </div>
            </div>
            <div className={styles.center_mask} onClick={
                props.hideCenter
            }>
            </div>

        </div>
    );
}

export default Center;