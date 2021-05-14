import { useState, useCallback } from 'react';
import NavLink from 'umi/navlink';
import Route from 'umi/Route'

import { createFromIconfontCN, MenuFoldOutlined, SearchOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import IconcontLink from './../../assets/iconlink'
import Center from './../center'
import styles from './style.css'
import { CSSTransition } from 'react-transition-group'
import Discovery from './../../pages/discovery/index'
const Header = () => {
    const IconFont = createFromIconfontCN({
        scriptUrl: [
            IconcontLink
        ],
    });
    const tab =
        [{ name: '我的', type: 1, path: '/' },
        { name: '发现', type: 2, path: '/discovery' },
        { name: '云村', type: 3, path: '/' },
        { name: '视频', type: 4, path: '/' }
        ]
    const [current, setCurrent] = useState(1)
    const { TabPane } = Tabs;
    function callback(key) {
        setCurrent(key)
    }

    //控制个人中心显示
    const [show, setShow] = useState(false);
    const showCenter = () => {
        setShow(true)
    }
    const handleCenter = () => {
        setShow(false)
    }
    const [percent, setPercent] = useState(10);
    const increase = () => {
        const targetPercent = percent >= 90 ? 100 : percent + 10;
        const speed = (targetPercent - percent) / 400;
        let start = null;
        const animate = timestamp => {
            console.log(timestamp)
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const currentProgress = Math.min(parseInt(speed * progress + percent, 10), targetPercent);
            setPercent(currentProgress)
            if (currentProgress < targetPercent) {
                window.requestAnimationFrame(animate);
            }
        };
        window.requestAnimationFrame(animate);
        // if (percent < 80) {
        //     increase();
        // }
    }
    const showProgress = () => {
        setShow(true)
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 80) {
                clearInterval(id);
            } else {
                width++;
            }
            setPercent(width)
        }
    }
    return (
        <div className={styles.header_container}>

            <CSSTransition
                in={show} // 如果this.state.show从false变为true，则动画入场，反之out出场 
                timeout={100000} //动画执行1秒 
                classNames='fade' //自定义的class名            
            >
                <Center isShow={show} hideCenter={handleCenter} ></Center>
            </CSSTransition>


            <Tabs defaultActiveKey="3" onChange={callback} centered >
                <TabPane tab={
                    <MenuFoldOutlined onClick={showCenter} />
                } key='1'>
                </TabPane>
                <TabPane tab={tab[0].name} key='2'>
                    <div>mine</div>
                </TabPane>
                <TabPane tab={tab[1].name} key='3'>
                    <Discovery type='2' />
                </TabPane>
                <TabPane tab={tab[2].name} key='4'>
                    <div>mine</div>
                </TabPane>
                <TabPane tab={tab[3].name} key='5'>
                    <div>mine</div>
                </TabPane>
                <TabPane tab={
                    <SearchOutlined rotate='90' />
                } key='6'>
                </TabPane>
            </Tabs>
            {/* <div>
                {current === 1 ? <Discovery type={tab[current].type} /> : null}
                <Route path={`/discovery?type=${tab[current].type}`} component={Discovery} />
            </div> */}
        </div>
    )
}
export default Header;
