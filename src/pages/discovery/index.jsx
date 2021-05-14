import React, { useState } from 'react';
import { connect } from 'dva';
import { MenuFoldOutlined, SearchOutlined } from '@ant-design/icons';
import { CSSTransition } from 'react-transition-group'
import Center from './../../components/center'
import CarouselConatiner from './../../components/carousel';
import SongSheetList from './../../components/songSheet/index'
import styles from './index.css'
import IconFont from './../../assets/iconlink'
const Discovery = (props) => {
    const carouselSettings = {
        autoplaySpeed: 6000,
        autoplay: false,
        arrows: false
    }
    const width = window.innerWidth;
    const imgWidth = Math.round(width * 0.95)
    const style = {
        // width: width
    }
    const u = navigator.userAgent;
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    const isIpad = u.indexOf('iPad') > -1;
    const isIPhone = u.indexOf('iPhone') > -1;
    let temp = 0;
    if (isAndroid) {
        temp = 0
    } if (isIPhone) {
        temp = 2
    } if (isIpad) {
        temp = 3
    }

    const [show, setShow] = useState(false);
    const showCenter = () => {
        setShow(true)
    }
    const handleCenter = () => {
        setShow(false)
    }
    return (
        <div className={styles.main} style={style}>
            {/* <Header /> */}

            <CSSTransition
                in={show} // 如果this.state.show从false变为true，则动画入场，反之out出场 
                timeout={100000} //动画执行1秒 
                classNames='fade' //自定义的class名            
            >
                <Center isShow={show} hideCenter={handleCenter} ></Center>
            </CSSTransition>

            <div className={styles.header}>
                <div className={styles.menufolder}><MenuFoldOutlined onClick={showCenter} /></div>
                <div className={styles.search_box}> <SearchOutlined /> <span>国风堂</span> </div>
            </div>
            <CarouselConatiner carouselSettings={carouselSettings} banners={props.banners} />
            <div className={styles.recommend}>
                <div className={styles.recommend_top}>
                    <div className={styles.reconmend_title}>推荐歌单</div>
                    <div className='font-size-14'>更多 <IconFont type='icon-jiantou' className={styles.icon} /></div>
                </div>
                <SongSheetList songs={props.recommendsongs}></SongSheetList>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    // console.log(temp)
    return {
        banners: state.discovery.banners,
        tabType: 2,
        recommendsongs: state.discovery.recommendsongs
    }
}
export default connect(mapStateToProps)(Discovery);
