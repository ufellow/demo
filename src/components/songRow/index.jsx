import styles from './style.css';
const SongRow = (props) => {
    return (
        <div className={styles.songRow_container}>
            <div className={styles.song_cover}>
                <img></img>
            </div>
            <div className={styles.song_info}>
                <div className={styles.song_top}>
                    <span>歌名</span>
                    <span>歌手</span>
                </div>
                <div className={styles.song_essential}>
                    <span>标签</span>
                    <span> 概要</span>
                </div>
            </div>
        </div>
    );
}
export default SongRow;