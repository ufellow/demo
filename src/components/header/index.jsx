import styles from './style.css';
import IconFont from './../../assets/iconlink';
const Header = (props) => {
    const title = '验证码'
    return (
        <div className={styles.header_box}>
            <div className={styles.goback}>
                <IconFont type='icon-fanhui' />
            </div>
            <div className={styles.header_title}>
                <h3>{title}</h3>
            </div>
        </div>
    )
}
export default Header;