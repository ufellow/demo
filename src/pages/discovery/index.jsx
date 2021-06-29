import React, { useState } from 'react';
import { connect } from 'dva';
import { MenuFoldOutlined, SearchOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import { CSSTransition } from 'react-transition-group'
import Center from './../../components/center'
import CarouselConatiner from './../../components/carousel';
import SongSheetList from './../../components/songSheet/index'
import SongRow from './../../components/songRow/index'
import More from './../../components/more/index'
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
        <div className={styles.discovery_container} style={style}>
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
            {/* 推荐歌单 */}
            <div className={styles.rec_palylist}>
                <div className={styles.rec_palylist_top}>
                    <div className={styles.rec_palylist_title}>推荐歌单</div>
                    <More />
                </div>
                <SongSheetList songs={props.recPlaylist}></SongSheetList>
            </div>
            {/* 推荐歌曲 */}
            <div className={styles.rec_songs}>
                <div className={styles.rec_songs_top}>
                    <IconFont type='icon-shuaxin' />
                    <span className={styles.rec_songs_title}>让你单曲循环的华语歌你好你好你好你好</span>
                    <More></More>
                </div>
                <Carousel dots='false'>
                    <div>
                        <SongRow></SongRow>
                        <SongRow></SongRow>
                        <SongRow></SongRow>
                    </div>
                    <div>
                        <SongRow></SongRow>
                        <SongRow></SongRow>
                        <SongRow></SongRow>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        banners: state.discovery.banners,
        tabType: 2,
        recPlaylist: state.discovery.recPlaylist
    }
}
export default connect(mapStateToProps)(Discovery);
