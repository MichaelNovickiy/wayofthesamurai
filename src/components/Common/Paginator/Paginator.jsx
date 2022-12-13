import React from 'react';
import {Pagination} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {requestUsers} from '../../../redux/users-reducer';

const Paginator = ({totalItemsCount, currentPage, onPageChanged}) => {
    const pageSize = useSelector((state => state.usersPage.pageSize))
    const dispatch = useDispatch()

    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
        dispatch(requestUsers(current, pageSize))
    };

    return <Pagination
        total={totalItemsCount}
        current={currentPage}
        pageSize={pageSize}
        onChange={onPageChanged}
        showSizeChanger={true}
        onShowSizeChange={onShowSizeChange}
        showQuickJumper
        showTotal={(totalItemsCount) => `Total ${totalItemsCount} items`}
    />
}

export default Paginator


