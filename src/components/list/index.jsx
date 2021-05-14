import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import styles from './style.css'
import IconcontLink from './../../assets/iconlink'

function index(props) {
    const IconFont = createFromIconfontCN({
        scriptUrl: [
            IconcontLink
        ],
    });
    const list = props.centerlist;
    return (
        <ul className={styles.row_list}>
            {list.map((item, index) => {
                return (
                    <li key={index}>
                        <div>
                            <IconFont type={item.icon} className={styles.icon}></IconFont>
                            <span className={styles.name}>{item.name}</span>
                        </div>
                        {item.detail == '' ? null : <div className={`${styles.info} font-size-12 color-b5b5b5`}>{item.detail}</div>}
                        <div>
                            <IconFont type='icon-jiantou' className={styles.details} />
                        </div>
                    </li>
                )
            })}
        </ul>)

}

export default index;