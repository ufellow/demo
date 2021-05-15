import IconFont from './../../assets/iconlink'
const More = () => {
    const styles = {
        fontSize: '1rem',
        border: 'solid 0.5px #b5b5b5',
        padding: '0.2rem 1rem',
        borderRadius: '2rem '
    }
    return (
        <div style={styles} >
            更多
            <IconFont type='icon-jiantou' className='icon-margin' />
        </div>
    );
}
export default More;