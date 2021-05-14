import React from 'react'
import IconFont from './../../assets/iconlink'
import styles from './style.css'
import Discovery from './../../pages/discovery/index'
const RenderTabs = (tabs, tab, changeTab) => {
    return tabs.map((item, index) => {
        if (!item.isshow) return null;
        return (
            <li key={item.index}
                className={tab === index ? `${styles.active} tab_list` : 'tab_list'}
                onClick={() => { changeTab(index) }}>
                <div className={tab === index ? `${styles.icon_active} ${styles.icon}` : `${styles.icon}`}><IconFont type={item.icon} className='' /></div>
                <div> {item.name}</div>
            </li>
        )
    })
}
const showMain = (idx) => {
    switch (idx) {
        case 0:
            return (
                <Discovery></Discovery>)
            break;
        case 1:
            return (
                <div></div>)
            break;
        case 2:
            return (
                <div></div>)
            break;
        case 3:
            return (
                <div></div>)
            break;
        case 4:
            return (
                <div></div>)
            break;
        default: break;
    }
}
class Tabs extends React.Component {
    constructor(props) {
        super(props)

        const tabs = [
            { name: '发现', index: 0, icon: 'icon-faxian', isshow: true },
            { name: '播客', index: 1, icon: 'icon-boke', isshow: true },
            { name: '我的', index: 2, icon: 'icon-mine', isshow: true },
            { name: 'k歌', index: 3, icon: 'icon-maikefeng', isshow: true },
            { name: '云村', index: 4, icon: 'icon-qunzu', isshow: true },
        ]
        this.state = {
            tab: 0,
            tabs
        }
    }
    changeTab = (idx) => {
        console.log(idx)
        this.setState({
            tab: idx
        })
    }
    render() {
        const { tabs, tab } = this.state;
        return (
            <div>
                <ul className={styles.Tab_box}>
                    {RenderTabs(tabs, tab, this.changeTab)}
                </ul>
                {showMain(tab)}
            </div>
        )
    }
}
export default Tabs;