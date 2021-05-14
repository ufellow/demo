import React from 'react';
import IconFont from '../../assets/iconlink';
import styles from './style.css'
function SongSheetList(props) {
    const songList = props.songs || [];
    const imgWidth = Math.round(window.innerWidth * 0.25)
    const imgSize = `?param=` + imgWidth + `y` + imgWidth;
    return (
        <div className={styles.songSheet_container}>
            {songList.length > 0 ?
                songList.map((item, index) => {
                    return (
                        <div className={styles.songsheet_block} key={index}>
                            <img className={styles.img} src={item.picUrl + imgSize} />
                            <div className={`${styles.songSheet_name} font-size-12`} style={{ "WebkitBoxOrient": "vertical" }}>{item.name}</div>
                            <div className={styles.played_num}>
                                <IconFont type='icon-play' className='icon-margin'></IconFont>
                                <span>78万</span>
                            </div>
                        </div>
                    )
                })
                : null
            }

        </div>
    );
}

export default SongSheetList;