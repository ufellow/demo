// /**
//  * title: Index Page
//  * Routes:
//  *   - ./src/pages/demo/a.jsx
//  *   - ./src/pages/demo/b.jsx
//  */
import React, { useState } from 'react';
import styles from './index.css';
import { Table } from 'antd';
import { connect } from 'dva';
import UserModal from './components/UserModal';

const Index = ({ users }) => {
    const [visibleModal, setVisibleModal] = useState(false)
    const [activeRow, setActiveRow] = useState([])
    const columns = [
        {
            title: 'UserId',
            dataIndex: 'userId',
            key: 'userId',
            render: text => <span>{text}</span>,
        },
        {
            title: 'nickname',
            dataIndex: 'nickname',
            key: 'nickname',
        },
        {
            title: 'Followeds',
            dataIndex: 'followeds',
            key: 'followeds',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a
                        onClick={() => {
                            handleEdit(record)
                        }}
                    >edit</a>&nbsp;&nbsp;&nbsp;
                    <a>Delete</a>
                </span>
            ),
        },
    ];
    const handleEdit = (record) => {
        setVisibleModal(true)
        setActiveRow(record)
    }
    const handleOK = () => {
        setVisibleModal(false)
    }
    const handleCancel = () => {
        setVisibleModal(false)
    }


    return (
        <div className={styles.main}>
            <Table columns={columns} dataSource={users} rowKey='userId' />
            <UserModal
                visible={visibleModal}
                handleOk={handleOK}
                handleCancel={handleCancel}
                record={activeRow}
            > </UserModal>
        </div>
    );
};

const mapStateToProps = ({ users }) => {
    return {
        users
    }
}
export default connect(mapStateToProps)(Index);